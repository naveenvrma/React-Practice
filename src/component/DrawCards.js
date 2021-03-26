import axios from "axios";
import React from "react";
import Cards from "./Cards";

export default class DrawCards extends React.Component{
    state = {
        cards: [],
        deckId: "",
        remainingCards: 52
    }

    componentDidMount(){
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then((response) => {
            // console.log(response)
            let deckId = response.data["deck_id"]
            this.setState({
                deckId
            })
        });
    }

    drawCards = () => {
        axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=2`)
        .then((response) => {
            let cards = response.data["cards"]
            let remainingCards = response.data["remaining"]
            this.setState({
                cards,
                remainingCards
            })
        })
    }

    
    render(){
        return(
            <div>
                <button onClick={this.drawCards}> Draw Cards</button>
                <Cards cards={this.state.cards} remainingCards={this.state.remainingCards} />
            </div>
        )
    }
}

