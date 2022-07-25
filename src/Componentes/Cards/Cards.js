import { useState } from "react"
import spin from "../asstes/giro.png"
import "./styles.css"

export default function Cards(){
const cards = [
    {question: "O que é JSX?", response: "Uma extensão de linguagem do JavaScript"},
    {question: "O React é __ ", response: "uma biblioteca JavaScript para construção de interfaces"},
    {question: "Componentes devem iniciar com __", response: "letra maiúscula"},
    {question: "Podemos colocar __ dentro do JSX", response: "expressões"},
    {question: "O ReactDOM nos ajuda __", response: "interagindo com a DOM para colocar componentes React na mesma"},
    {question: "Usamos o npm para __", response: "gerenciar os pacotes necessários e suas dependências"},
    {question: "Usamos props para __", response: "passar diferentes informações para componentes"},
    {question: "Usamos estado (state) para __", response: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
]
    cards.sort(embaralhar)
    function embaralhar(){
        return Math.random() - 0.5
    }


    for(let i = 0; i < cards.length; i++){
        cards[i].title = `Pergunta ${i + 1}`
    }

    return(
        <div className="cards">
            {cards.map((card) => <Card  key={card.title} title={card.title} question={card.question} response={card.response} />)}
        </div>
    )
}

function Card({title, question, response}){
    console.log(title)
    let [card, setCard] = useState("Title")
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
                        <div className="error">Não lembrei</div>
                        <div className="almost">Quase não lembrei</div>
                        <div className="zap">Zap!</div>
                    </div>
                </div>
            }
        </>
    )
}
