import { useState } from "react"
import logo from "../asstes/logo.png"
import Cards from "../Cards/Cards"
import Footer from "../Footer/Footer"
import "./styles.css"

export default function Main(){
    const cards = [
        {question: "O que é JSX?", response: "Uma extensão de linguagem do JavaScript", status:""},
        {question: "O React é __ ", response: "uma biblioteca JavaScript para construção de interfaces", status:""},
        {question: "Componentes devem iniciar com __", response: "letra maiúscula", status:""},
        {question: "Podemos colocar __ dentro do JSX", response: "expressões", status:""},
        {question: "O ReactDOM nos ajuda __", response: "interagindo com a DOM para colocar componentes React na mesma", status:""},
        {question: "Usamos o npm para __", response: "gerenciar os pacotes necessários e suas dependências", status:""},
        {question: "Usamos props para __", response: "passar diferentes informações para componentes", status:""},
        {question: "Usamos estado (state) para __", response: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", status:""}
    ]
    

    return(
        <div className="main">
            <div className="logo">
                <img src={logo} alt="logo" />
                ZapRecall
            </div>
            <Cards cards={cards} />
            <Footer cards={cards} />
        </div>
    )
}


