import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Story from './Story';


function StoriesWrapper({ setCanSearch }) {

    const [stories, setStories] = useState([]);
    useEffect(() => { getStories() }, []);

    const getStories = async () => {
        //call api and get stories
        var res = await (await Axios.post("http://localhost:9000/db/get_stories", {})).data
        res = res.reverse();
        setStories(res);
        console.log(res);
    };

    return (
        <div className="stories">
            {
                stories.map(story => <Story key={story.post_time} author={story.author} post_time={story.post_time} content={story.story_content}></Story>)
            }
        </div >
    )
}
export default StoriesWrapper;