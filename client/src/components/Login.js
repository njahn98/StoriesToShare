import React, { useState } from 'react';
import Axios from 'axios';
import { Button, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

function CreateAccount() {
    const [pass, setPass] = useState("");
    const [username, setUsername] = useState("");

    const handleInputChange = (event, setState) => {
        var value = event.target.value;
        setState(value);
    }

    const validateForm = (e) => {
        login(e);
    }

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

    const storeToken = (username) => {
        if (!localStorage.getItem("token") || localStorage.getItem("token").length === 0) {
            console.log("Original Value: " + localStorage.getItem("token"));
        }
        localStorage.setItem("token", username)
    }

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