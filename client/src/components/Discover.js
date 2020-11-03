import React, { useState } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import StoriesWrapper from './StoriesWrapper';
import './Discover.css';
function Discover() {
    const [searchQuery, setSearchQuery] = useState("--start-blank--");

    const handleInputChange = (event, setState) => {
        var value = event.target.value;
        console.log(value);
        setState(value);
    }


    const update = () => {
        setSearchQuery("");
    }

    return (
        <div>
            <FormControl className="search-bar" placeholder="Search" size="lg" onChange={(e) => handleInputChange(e, setSearchQuery)} />
            <StoriesWrapper query={searchQuery} />
        </div>
    );
}
export default Discover;