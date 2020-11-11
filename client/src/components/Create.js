import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Form } from 'react-bootstrap'

import './Create.css';

function Create() {
    useEffect(() => {
        const usern = localStorage.getItem("token");
        const msg = "Tell us a story " + usern + "!";
        document.getElementById("storyContent").placeholder = msg;
    }, []);

    const [storyContent, setStoryContent] = useState("");
    const [title, setTitle] = useState("");

    var post = {
        author: "",
        story_content: "",
        title: "",
    };

    const handleInputChange = (event, setState) => {
        var value = event.target.value;
        setState(value);
    }

    const validateForm = () => {

        var invalid = false;
        var msg = "";

        if (!storyContent.length > 0) {
            invalid = true;
            msg = "You can not submit a blank story. Please type content and try again.";
        }

        if (storyContent.length > 5000) {
            invalid = true;
            msg = "Your story is too long. Please shorten it and try again.";
        }

        if (invalid) {
            alert(msg);
        }

        else {
            sendPost();
        }

    }

    const sendPost = async () => {
        post.author = localStorage.getItem("token");
        post.story_content = storyContent;
        post.title = title;

        var res = await Axios.post("http://localhost:9000/db/store_story", post);

        window.location = "/";
    }

    return (
        <Form id="create" onSubmit={validateForm}>
            <Form.Group controlId="formBasicEmail">
                <h1>Create Story</h1>
                <Form.Control size="lg" type="text" onChange={(e) => handleInputChange(e, setTitle)} placeholder="Title" />
                <Form.Control as="textarea" id="storyContent" rows="10" className="storyContent" onChange={(e) => handleInputChange(e, setStoryContent)} placeholder="" />
            </Form.Group>
            <Button variant="light" type="submit">
                Submit
  </Button>
        </Form>
    );
}
export default Create