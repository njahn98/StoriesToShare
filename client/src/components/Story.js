import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function Story() {
    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend orci non ex vestibulum condimentum. Nam euismod egestas mauris, at volutpat est euismod non. Nullam fermentum sem enim, vitae posuere libero congue a. Curabitur bibendum mollis fermentum. Aenean vehicula erat at odio imperdiet dignissim. Morbi suscipit tincidunt est, ut faucibus tortor vulputate non. Nullam ullamcorper, quam varius vulputate luctus, lorem elit volutpat erat, et semper magna justo sit amet ante. Proin ut leo a massa venenatis auctor ut sed arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus dapibus dignissim tincidunt. Vivamus gravida purus et tincidunt gravida. Praesent ultricies erat sit amet lobortis luctus. Curabitur semper lacus et efficitur hendrerit. Ut lacus lectus, pretium sed tempus ornare, gravida sit amet sapien."

    const [name, setName] = useState("Name");
    const [date, setDate] = useState("00-00-0000");
    const [story, setStory] = useState(text);

    return (
        <Card className="box-shadow">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{date}</Card.Subtitle>
                <Card.Text>{story}</Card.Text>
            </Card.Body>
        </Card>
    );
}
export default Story;