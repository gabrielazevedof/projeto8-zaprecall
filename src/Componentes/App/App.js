import "./styles.css"
import "./reset.css"
import Home from "../Home/Home"
import Main from "../Main/Main"
import { useState } from "react"

export default function App(){
    let [page, setPage] = useState("Home")

    return(
        <>
            {page === "Home" && <Home setPage={setPage} />}
            {page !== "Home" && <Main />}
        </>
    )
}
