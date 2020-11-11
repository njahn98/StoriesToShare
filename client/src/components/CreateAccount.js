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

    //do validation here
    const validateForm = (e) => {
        
        var invalid = false;
        var msg = "";

        //validate 8 characters
        if(pass.length < 8){
            invalid = true;
            msg = "Need at least 8 characters";
        }

        //validate that the password contains a number
        var numberHere = 0;
        var includesNum = false;
        var numbers = "0123456789";
        for(var i=0; i < pass.length; i++){
            includesNum = numbers.includes(pass.charAt(i), 0);
            if(includesNum){
                numberHere = 10;
                break;
            }
        }
        if(numberHere == 0){
           invalid = true;
           msg = "Password needs to contain a number!";
        }

        //validate that password contains a letter
        var letters = "abcdefghijklmnopqrstuvwxyz";
        var includesLetter = false;
        var letterHere = 0;
        for(var i = 0; i < pass.length; i++){
            includesLetter = letters.includes(pass.charAt(i),0);
            if(includesLetter){
                letterHere = 10;
                break;
            }
        }

        if(letterHere == 0){
            invalid = true;
            msg = "Password needs to contain a letter";
        }

        if(invalid){
            alert(msg);
        }
        else{
            createAccount(e);
        }
       
    }

    const createAccount = async (e) => {
        e.preventDefault();
        var data = {
            f_name: fName,
            l_name: lName,
            username: username,
            password: pass
        };

        console.log(data)

        var res = await Axios.post("http://localhost:9000/db/make_account", data);

        if (res.data == username) {
            alert("Account created successfullly");
            window.location = "/"
        }
        else if (!res.data || res.data == "") {
            alert("An error occured please try again.")
        }
        else {
            alert(res.data)
        }
    }

    return (
        <Form id="create" onSubmit={validateForm} >
            <Form.Group controlId="formBasicEmail">
                <h1>Create Account</h1>
                <Form.Control type="text" id="fName" className="fName" onChange={(e) => handleInputChange(e, setFName)} placeholder="First Name" />
                <Form.Control type="text" id="lName" className="lName" onChange={(e) => handleInputChange(e, setLName)} placeholder="Last Name" />
                <Form.Control type="text" id="username" className="username" onChange={(e) => handleInputChange(e, setUsername)} placeholder="Username" />
                <Form.Control type="password" id="password" className="password" onChange={(e) => handleInputChange(e, setPass)} placeholder="Password" />
            </Form.Group>

            <Button type="submit" variant="light">Create Account</Button>
        </Form>
    );
}
export default CreateAccount;