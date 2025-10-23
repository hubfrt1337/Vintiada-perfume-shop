import adv1Big from "../../assets/adv-1big.png"
import adv2Big from "../../assets/adv-2big.png"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import "./Advertisements.css"
export function Adv(){
    const [advImage, setAdvImage] = useState(adv1Big);

    function changeImage(){
        if(advImage === adv1Big){
            setAdvImage(adv2Big)
        } else {
            setAdvImage(adv1Big)
        }
    }

    return (
        <section>
            <img src={advImage}></img>
            <div className="l-arrow">
                <FaArrowLeft 
                onClick={changeImage}
                className="arrow"/>
            </div>
            <div className="right-arrow">
                <FaArrowRight 
                onClick={changeImage}
                className="arrow"/>
            </div>
        </section>
    )
}