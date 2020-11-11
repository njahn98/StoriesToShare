import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Story from './Story';

//query is an opptional attribute: if null all stories will be returned if non-null stories matching query will be displayed
function StoriesWrapper({ query }) {

    //state for stories updated with server request
    const [stories, setStories] = useState([]);

    //loads all stories when first rendered
    useEffect(() => { getStories() }, []);
    //loads components that match serach query when query state is updated
    useEffect(() => { getStories() }, [query])

    //get stories from server
    const getStories = async () => {
        var res = await (await Axios.post("http://localhost:9000/db/get_stories", { "query": query })).data
        res = res.reverse();
        setStories(res);
    };



    return (
        <div className="stories">
            {
                stories.map(story => <Story key={story.post_time} author={story.author} post_time={story.post_time} content={story.story_content} title={story.title}></Story>)
            }
        </div >
    )
}
export default StoriesWrapper;