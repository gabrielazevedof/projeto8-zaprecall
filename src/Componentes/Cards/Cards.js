import { useState } from "react"
import spin from "../asstes/giro.png"
import error from "../asstes/error.png"
import duvida from "../asstes/duvida.png"
import acerto from "../asstes/acerto.png"
import "./styles.css"

export default function Cards({cards}){
    cards.sort(embaralhar)
    function embaralhar(){
        return Math.random() - 0.5
    }

    
    for(let i = 0; i < cards.length; i++){
        cards[i].title = `Pergunta ${i + 1}`
    }

    
    return(
        <div className="cards">
            {cards.map((card) => <Card  key={card.title} title={card.title} question={card.question} response={card.response} cards={cards}/>)}
        </div>
    )
}

function Card({title, question, response, cards}){
    let [card, setCard] = useState("Title")
    function closedCard(answer){
        setCard(answer);
        for(let i = 0; i < cards.length; i++){
            if(title === cards[i].title){
                cards[i].status = answer
            }
        }
    }
    return(
        <>  
           {card === "Title" &&  
                <div className="card">
                    {title}
                    <ion-icon name="play-outline" onClick={() => setCard("Question") } ></ion-icon> 
                </div>
            }

                
            { card === "Question" &&
                <div className="card-question">
                    {question}
                    <img src={spin} alt="spin" onClick={() => setCard("Response") } />
                </div>
            }
            
            { card === "Response" &&
                <div className="card-response">
                    {response}
                    <div className="performance">
                        <div className="error" onClick={() => closedCard("Error") } >Não lembrei</div>
                        <div className="almost" onClick={() => closedCard("Almost") } >Quase não lembrei</div>
                        <div className="zap" onClick={() => closedCard("Right") } >Zap!</div>
                    </div>
                </div>

            }
            { card === "Error" &&
                
                <div className="card-error">
                    {title}
                    <img src={error} alt="error" />
                </div>
            }
            { card === "Almost" &&
                <div className="card-almost">
                    {title}
                    <img src={duvida} alt="duvida" />
                </div>
            }
            { card === "Right" &&
                <div className="card-right">
                    {title}
                    <img src={acerto} alt="acerto" />
                </div>
            }
        </>
    )
}

