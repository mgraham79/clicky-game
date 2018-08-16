import React, { Component } from "react";
import cards from "../../cards.json";

import Card from "../Card";
import Scoreboard from "../Scoreboard";
import Footer from "../Footer";
import "./Game.css";

class Game extends Component {

    state = {
        characters: cards,
        matches: 0,
        guesses: 0,
        matchedCharacter: 3
    }

    getCharacter = (id) => {

        // alert(id);
        if(id === this.state.matchedCharacter) {
            // if a character is a match
            // update the matches state by one
            // but not the guesses state
            // if they are also a match pick a new random character
            let randomId = Math.floor(Math.random() * this.state.characters.length) + 1;
            console.log(randomId);
            this.setState({
                matches: this.state.matches +1,
                matchedCharacter: randomId
            });
        } else {
            // if they are not a match update the 
            // guesses state by one
            this.setState({
                guesses: this.state.guesses +1
            });
        }
        
    }

    render() {
        return (
            <div className="container">
              <Scoreboard
                matches={this.state.matches}
                guesses={this.state.guesses}
              />
                <div className="row">
                    {this.state.characters.map(character => (
                        <Card
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            image={character.image}
                            getCharacter={this.getCharacter}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Game;