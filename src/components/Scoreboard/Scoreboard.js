import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
    <div className="jumbotron">
        <img src="../../../assets/images/guardians-logo.jpg" />
        <h2>Clicky Game</h2>
        <p>Character Matches: {props.matches}</p>
        <p>Character Guesses: {props.guesses}</p>
    </div>
);

export default Scoreboard;
