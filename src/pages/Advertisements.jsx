import adv1Big from "../assets/adv-1big.png"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import "./Advertisements.css"
export function Adv(){
    

    return (
        <section>
            <img src={adv1Big}></img>
            <div className="l-arrow">
                <FaArrowLeft 
                
                className="arrow"/>
            </div>
            <div className="right-arrow">
                <FaArrowRight className="arrow"/>
            </div>
        </section>
    )
}