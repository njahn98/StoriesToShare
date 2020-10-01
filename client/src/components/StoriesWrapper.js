import React, { useEffect } from 'react';
import Story from './Story';


function StoriesWrapper({ setCanSearch }) {
    const range = (end) => {
        var start = 1;
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }

    const stories = [];

    const getStories = () => {
        //call api and get stories
    };

    const numStories = 10;

    useEffect(() => { setCanSearch(true) }, [])

    return (
        <div className="stories">
            {
                range(numStories).map(i =>
                    <Story></Story>
                )
            }
        </div>
    )
}
export default StoriesWrapper;