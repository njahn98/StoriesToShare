import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Form } from 'react-bootstrap'

import './Create.css';

function Create() {
    //populated the story content field with dynamic message based on username
    useEffect(() => {
        const usern = localStorage.getItem("token");
        const msg = "Tell us a story " + usern + "!";
        document.getElementById("storyContent").placeholder = msg;
    }, []);

    //state for story content and title: This is automatically updated when the coresponding field is changed
    const [storyContent, setStoryContent] = useState("");
    const [title, setTitle] = useState("");

    //JSON base object for post to be sent to api
    var post = {
        author: "",
        story_content: "",
        title: "",
    };

    //updates the given state with current event value
    const handleInputChange = (event, setState) => {
        var value = event.target.value;
        setState(value);
    }

    //validated create form and sends post to server if valid
    const validateForm = (e) => {
        e.preventDefault();
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

    //sends post to server and redirect to homepage
    const sendPost = async () => {
        //get username with the stored local token
        post.author = localStorage.getItem("token");
        post.story_content = storyContent;
        post.title = title;

        await Axios.post("http://localhost:9000/db/store_story", post);
        console.log("HI")
        window.location = "/";
        console.log("BYE")
    }

    return (
        <Form id="create" onSubmit={validateForm}>
            <Form.Group>
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