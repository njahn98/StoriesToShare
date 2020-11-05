import React, { useState } from 'react';
import Axios from 'axios';
import { Button, Form } from 'react-bootstrap'

function CreateAccount() {
    //state for story content and title: This is automatically updated when the coresponding field is changed
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [pass, setPass] = useState("");
    const [username, setUsername] = useState("");

    //updates the given state with current event value
    const handleInputChange = (event, setState) => {
        var value = event.target.value;
        setState(value);
    }

    //do validation here
    const validateForm = (e) => {
        createAccount(e);
    }

    //send new account request to server if valid redirect to homepage
    const createAccount = async (e) => {
        e.preventDefault();
        var data = {
            f_name: fName,
            l_name: lName,
            username: username,
            password: pass
        };

        var res = await Axios.post("http://localhost:9000/db/make_account", data);

        if (res.data === username) {
            alert("Account created successfullly");
            window.location = "/"
        }
        else if (!res.data || res.data === "") {
            alert("An error occured please try again.")
        }
        else {
            alert(res.data)
        }
    }

    return (
        <Form id="create" onSubmit={validateForm} >
            <Form.Group>
                <h1>Create Account</h1>
                <Form.Control type="text" id="fName" className="fName" onChange={(e) => handleInputChange(e, setFName)} placeholder="First Name" />
                <Form.Control type="text" id="lName" className="lName" onChange={(e) => handleInputChange(e, setLName)} placeholder="Last Name" />
                <Form.Control type="text" id="username" className="username" onChange={(e) => handleInputChange(e, setUsername)} placeholder="Username" />
                <Form.Control type="password" id="password" className="password" onChange={(e) => handleInputChange(e, setPass)} placeholder="Password" />
            </Form.Group>

            <Button type="submit">Create Account</Button>
        </Form>
    );
}
export default CreateAccount;