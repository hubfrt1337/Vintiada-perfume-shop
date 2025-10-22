import { Header } from "../components/Header"
import { useEffect } from "react"
export function HomePage(){
    useEffect(() => {
        document.title = "Vintiada"
    })
    return (
        <>
        <Header></Header>
            
        </>
    )
}