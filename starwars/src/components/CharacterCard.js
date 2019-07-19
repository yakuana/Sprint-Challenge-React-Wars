import React from "react";
import { Card } from "semantic-ui-react";


const CharacterCard = (props) => {
    return (
        <div className="Character-container">
            <Card className="Character-card">
                <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                    <Card.Meta>
                        <span className="Birthday">Birth Year: {props.birthday}</span>
                    </Card.Meta>
                    <Card.Meta>
                        <span>Gender: {props.gender}</span>
                    </Card.Meta>
                    <Card.Description>
                        {props.name} is {props.height}cm and {props.mass}kg.
                    </Card.Description>
                    <Card.Description>
                        {props.name} has been in {props.films.length} {props.films.length > 1 ? "films" : "film"}.
                    </Card.Description>
                </Card.Content>
            </Card>
        </div>
    );   
};

export default CharacterCard; 