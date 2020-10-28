import React, { useState } from 'react';
import Axios from 'axios';
import { Button, Form } from 'react-bootstrap'

function CreateAccount() {
    const [pass, setPass] = useState("");
    const [username, setUsername] = useState("");

    const handleInputChange = (event, setState) => {
        var value = event.target.value;
        setState(value);
    }

    const login = async () => {
        var account = {
            username: username,
            password: pass
        };

        var res = await Axios.post("http://localhost:9000/db/get_account", account);

        if (res == username) {
            alert("You have signed in");
            storeToken(res);
        }
        else {
            alert(res);
        }

    }

    const storeToken = (username) => {

    }

    return (
        <Form id="create" onSubmit={login}>
            <Form.Group controlId="loginForm">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" className="username" onChange={(e) => handleInputChange(e, setUsername)} placeholder="Username" />

                <Form.Label>Password</Form.Label>
                <Form.Control type="password" className="password" onChange={(e) => handleInputChange(e, setPass)} placeholder="Password" />
            </Form.Group>

            <Button>Login</Button>
        </Form>
    );
}
export default CreateAccount;