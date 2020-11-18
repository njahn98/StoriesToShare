import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './Story.css';

//attributes optional but recommended will be used to render correct story content
function Story({ author, post_time, content, title }) {
    //state for post
    var [day, setDay] = useState("");
    var [month, setMonth] = useState("");
    var [year, setYear] = useState("");
    var [isFull, setIsFull] = useState(false);
    var [display, setDispaly] = useState(content.substring(0, 400))

    //called convertDate on load
    useEffect(() => { convertDate() }, []);

    useEffect(() => {
        if (isFull) {
            setDispaly(content)
        }
        else {
            setDispaly(content.substring(0, 400))
        }
    }, [isFull]);

    //conversts date-time to date format desired
    function convertDate() {
        var date = new Date(post_time);
        setDay(date.getDate());
        setMonth(date.getMonth() + 1);
        setYear(date.getFullYear());
    }

    function update() {
        setIsFull(!isFull);
    }

    function top() {
        window.location.href = '#top'
    }

    return (
        <Card className="box-shadow story">
            <Card.Body onClick={update}>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="text-muted story-head mr-sm-2">{author}</Card.Subtitle>
                <Card.Subtitle className="text-muted story-head mr-sm-2">{month}/{day}/{year}</Card.Subtitle>
                <Card.Text>{display}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button onClick={top} id="top">Go to top</Button>
            </Card.Footer>
        </Card>

    );
}
export default Story;