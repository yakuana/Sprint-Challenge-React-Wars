import React from "react";
import { Card } from 'semantic-ui-react'


const CharacterCard = (props) => {
    <Card>
        <Card.Content>
            <Card.Header>{props.name}</Card.Header>
            <Card.Meta>
                <span>Birth Year: {props.birthday}</span>
                <span>Gender: {props.gender}</span>
            </Card.Meta>
            <Card.Description>
                {props.name} is {props.height}cm and {props.mass}kg. {props.name} has been in {props.films.length}.
            </Card.Description>
        </Card.Content>
   </Card>
}

export default CharacterCard; 