import React, { useState } from 'react';
import Axios from 'axios';
import { Button, Form } from 'react-bootstrap'

import './Create.css';

function Create() {

    const [storyContent, setStoryContent] = useState("");

    var post = {
        author: "",
        story_content: ""
    };

    const handleInputChange = (event, setState) => {
        var value = event.target.value;
        setState(value);
    }

    const validateForm = () => {

        var invalid = false;
        var msg = "";
        
        if(!storyContent.length > 0){
            invalid = true;
            msg = "You can not submit a blank story. Please type content and try again.";
        }

        if(storyContent.length > 5000){
            invalid = true;
            msg = "Your story is too long. Please shorten it and try again.";
        }
        
        if(invalid){
            alert(msg);
        }

        else{
            sendPost();
        }
        
    }

    const sendPost = async () => {
        post.author = "Default User";
        post.story_content = storyContent;

        var res = await Axios.post("http://localhost:9000/db/store_story", post);
        console.log(res);
    }

    return (
        <Form id="create" onSubmit={validateForm}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Story Content</Form.Label>
                <Form.Control as="textarea" rows="10" className="storyContent" onChange={(e) => handleInputChange(e, setStoryContent)} placeholder="Tell us a story!" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
  </Button>
        </Form>
    );
}
export default Create