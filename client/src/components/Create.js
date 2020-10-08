import React, { useState } from 'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap'


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

    const sendPost = async () => {
        post.author = "Default User";
        post.story_content = storyContent;

        var res = await Axios.post("http://localhost:9000/db/store_story", post);
        console.log(res);
    }

    return (
        <form>
            <label>Story Content</label>
            <input type="text" value={storyContent} onChange={(e) => handleInputChange(e, setStoryContent)}></input>
            <Button onClick={sendPost}>Submit Story!</Button>
        </form >
    );
}
export default Create