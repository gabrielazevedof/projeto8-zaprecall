import logo from "../asstes/logo.png"
import "./styles.css"

export default function Home({setPage}){
    return(
        <div className="home">
            <div className="logo">
                <img src={logo} alt="logo" />
                ZapRecall
            </div>
            <Button setPage={setPage}/>
        </div>
    )
}

function Button({setPage}){
    return(
        <div className="button" onClick={() => setPage("Main") }>
            Inciar Recall!
        </div>
    )
}