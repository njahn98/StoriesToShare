import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './Story.css';

function Story({ author, post_time, content }) {
    var [day, setDay] = useState("");
    var [month, setMonth] = useState("");
    var [year, setYear] = useState("");

    useEffect(() => { convertDate() }, []);

    function convertDate() {
        var date = new Date(post_time);
        console.log(date)
        setDay(date.getDate());
        setMonth(date.getMonth() + 1);
        setYear(date.getFullYear());
    }


    return (
        <Card className="box-shadow story">
            <Card.Body>
                <Card.Title>{author}</Card.Title>
                <Card.Subtitle>{month}/{day}/{year}</Card.Subtitle>
                <Card.Text>{content}</Card.Text>
            </Card.Body>
        </Card>
    );
}
export default Story;