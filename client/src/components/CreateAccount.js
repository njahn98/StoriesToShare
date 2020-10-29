import React, { useState } from 'react';
import Axios from 'axios';
import { Button, Form } from 'react-bootstrap'

function CreateAccount() {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [pass, setPass] = useState("");
    const [username, setUsername] = useState("");

    const handleInputChange = (event, setState) => {
        var value = event.target.value;
        setState(value);
    }

    const createAccount = async () => {
        var account = {
            f_name: fName,
            l_name: lName,
            username: username,
            password: pass
        };

        var res = await Axios.post("http://localhost:9000/db/make_account", account);

        if (res = username) {
            alert("Account created successfullly");
        }
        else if (res == "username already exisits") {
            alert("Username aleady exists");
        }

    }

    return (
        <Form id="create" onSubmit={createAccount}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" className="fName" onChange={(e) => handleInputChange(e, setFName)} placeholder="First Name" />

                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" className="lName" onChange={(e) => handleInputChange(e, setLName)} placeholder="Last Name" />

                <Form.Label>Username</Form.Label>
                <Form.Control type="text" className="username" onChange={(e) => handleInputChange(e, setUsername)} placeholder="Username" />

                <Form.Label>Password</Form.Label>
                <Form.Control type="password" className="password" onChange={(e) => handleInputChange(e, setPass)} placeholder="Password" />
            </Form.Group>

            <Button>Create Account</Button>
        </Form>
    );
}
export default CreateAccount;