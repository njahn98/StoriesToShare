import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './Story.css';

//attributes optional but recommended will be used to render correct story content
function Story({ author, post_time, content, title }) {
    //state for post
    var [day, setDay] = useState("");
    var [month, setMonth] = useState("");
    var [year, setYear] = useState("");

    //called convertDate on load
    useEffect(() => { convertDate() }, []);

    //conversts date-time to date format desired
    function convertDate() {
        var date = new Date(post_time);
        setDay(date.getDate());
        setMonth(date.getMonth() + 1);
        setYear(date.getFullYear());
    }

    return (
        <Card className="box-shadow story">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="text-muted story-head mr-sm-2">{author}</Card.Subtitle>
                <Card.Subtitle className="text-muted story-head mr-sm-2">{month}/{day}/{year}</Card.Subtitle>
                <Card.Text>{content}</Card.Text>
            </Card.Body>
        </Card>

    );
}
export default Story;