function Cards({ cards, remainingCards }){
    return(
        <div>
            {
                cards.map(card => (
                    <div key={card.image}>
                        <img src={card.image} />
                    </div>
                ))
            }
            {
                cards.length === 0 && remainingCards === 0 && 
                    <p> You have reached end of the deck, Please refresh the Page</p>
                
            }
        </div>
    )
}

export default Cards;