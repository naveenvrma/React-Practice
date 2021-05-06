// import axios from "axios";
// import React from "react";
// import Cards from "./Cards";

// export default class DrawCards extends React.Component{
//     state = {
//         cards: [],
//         deckId: "",
//         remainingCards: 52
//     }

//     componentDidMount(){
//         console.log("Component did mount called")
//         axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//         .then((response) => {
//             // console.log(response)
//             let deckId = response.data["deck_id"]
//             this.setState({
//                 deckId
//             })
//         });
//     }

//     componentDidUpdate(prevProps) {
//         console.log("Draw cards is updated", prevProps)
//     }

//     componentWillUnmount(){
//         console.log("Component unmounted.")
//     }

//     drawCards = () => {
//         axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=2`)
//         .then((response) => {
//             let cards = response.data["cards"]
//             let remainingCards = response.data["remaining"]
//             this.setState({
//                 cards,
//                 remainingCards
//             })
//         })
//     }

//     postCards = () => {
//         let postDeckId = this.state.deckId
//         axios.post('https://reqres.in/api/users',{
//             name : postDeckId,
//             movies : ["avengers", "wonder woman"]
//         })
//         .then((response) => console.log("posted", response))
//     }

    
//     render(){
//         console.log("Render called")
//         return(
//             <div>
//                 <button onClick={this.drawCards}> Draw Cards</button>
//                 <Cards cards={this.state.cards} remainingCards={this.state.remainingCards} />
//                 <button onClick={this.postCards}> Post Cards</button>
//             </div>
//         )
//     }
// }

