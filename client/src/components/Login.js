import React, { useState } from 'react';
import Axios from 'axios';
import { Button, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

function CreateAccount() {
    //state that is updated when field is changed
    const [pass, setPass] = useState("");
    const [username, setUsername] = useState("");

    //updates the given state with current event value
    const handleInputChange = (event, setState) => {
        var value = event.target.value;
        setState(value);
    }


    //do validaton here
    const validateForm = (e) => {
        login(e);
    }

    //send login request to server - if valid store a login token in local storage and redirect to home page
    const login = async (e) => {
        e.preventDefault();
        var account = {
            username: username,
            password: pass
        };

        var res = await Axios.post("http://localhost:9000/db/get_account", account);
        res = res.data

        if (res == username) {
            alert("You have signed in");
            storeToken(res);
            window.location = "/";
        }
        else {
            alert(res);
        }

    }

    //stores token on local system
    const storeToken = (username) => {
        if (!localStorage.getItem("token") || localStorage.getItem("token").length === 0) {
            console.log("Original Value: " + localStorage.getItem("token"));
        }
        localStorage.setItem("token", username)
    }


    //state and logic to display login modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="mr-sm-2" variant="primary" onClick={handleShow}>
                Login
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Form id="create" onSubmit={validateForm}>
                    <Modal.Body>
                        <Form.Group controlId="loginForm">
                            <Form.Control type="text" className="username" onChange={(e) => handleInputChange(e, setUsername)} placeholder="Username" />
                            <Form.Control type="password" className="password" onChange={(e) => handleInputChange(e, setPass)} placeholder="Password" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button type="submit">Login</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}
export default CreateAccount;