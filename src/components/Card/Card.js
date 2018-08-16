import React from "react";
import "./Card.css";

const Card = props => (
    <div key={props.id}
        className="col-sm-4 gua-card"
        style={{ backgroundImage: `url("${props.image}")`}}
        onClick={() => props.getCharacter(props.id)}
        >
        <p>{props.name}</p>
    </div>
);

export default Card;

