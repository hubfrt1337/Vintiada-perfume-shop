import { Header } from "../../components/Header"
import { useEffect } from "react"
import chanelLogo from "../../assets/brands/chanell.png"
import versaceLogo from "../../assets/brands/versace.webp"
import armaniLogo from "../../assets/brands/armani.png"
import diorLogo from "../../assets/brands/dior.png"
import gucciLogo from "../../assets/brands/gucci.png"
import { BestSellers } from "./Bestsellers"
import { Arrivals } from "./Arrivals"
import "./HomePage.css"
import { Adv } from "./Advertisements"
export function HomePage({perfumes, setPerfumes}){
    useEffect(() => {
        document.title = "Vintiada"
    })
    return (
        <>
        <Header></Header>
            <div className="brands-container">
                <div className="brand">
                    <img src={chanelLogo}></img>
                </div>
                <div className="brand">
                    <img src={versaceLogo}></img>
                </div>
                <div className="brand">
                    <img src={armaniLogo}></img>
                </div>
                <div className="brand">
                    <img src={diorLogo}></img>
                </div>
                <div className="brand">
                    <img src={gucciLogo}></img>
                </div>
            </div>
            <Adv></Adv>
            <BestSellers perfumes={perfumes} setPerfumes={setPerfumes}></BestSellers>
            <Arrivals perfumes={perfumes}></Arrivals>
        </>
    )
}