export default function Footer({cards}){  
  
    // for(let i = 0; i < cards.length; i++){
    //     console.log(cards[i])
    // }

    // console.log(cards)
    return(
        <div className="cards">
            {cards.map((card) => <Card  key={card.title} title={card.title} question={card.question} response={card.response} status={card.status}/>)}
        </div>
    )
}

function Card ({title, question, response, status}) {
    console.log(status)
    return (
        status
    )
}