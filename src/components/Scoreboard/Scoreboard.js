import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
    <div className="jumbotron">
        <h2>Clicky Game</h2>
        <p className="matches">Character Matches: {props.matches}</p>
        <p className="guesses">Character Guesses: {props.guesses}</p>
    </div>
);

export default Scoreboard;
