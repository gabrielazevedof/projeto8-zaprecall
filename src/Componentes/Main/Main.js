import logo from "../asstes/logo.png"
import Cards from "../Cards/Cards"
import "./styles.css"

export default function Main(){
    return(
        <div className="main">
            <div className="logo">
                <img src={logo} alt="logo" />
                ZapRecall
            </div>
            <Cards />
        </div>
    )
}


