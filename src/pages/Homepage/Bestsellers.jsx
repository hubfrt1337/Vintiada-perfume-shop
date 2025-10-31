import "./Bestsellers.css"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import { BestsellersPerfum } from "./BestsellersPerfum";
export function BestSellers({ perfumes }) {
    
    const wrapper = useRef(null)
    const moveProducts = (direction) => {
        if(wrapper.current){
            wrapper.current.scrollBy({
                left: direction === "left" ? -200 : 200,
                behavior: "smooth"
            })
        }
    }
    const bestsellers = perfumes.filter(perfum => perfum.bestseller)
        .sort(() => 0.5 - Math.random()).slice(0, 6)
    
    return (
        <div className="best-sellers-container">
            <div className="title-best">Best Sellers</div>
            <div  className="scroll-wrapper">
                <div className="arrow-left" onClick={() => {moveProducts("left")}}>
                    <FaArrowLeft />
                </div>
                <div ref={wrapper} className="perfumes-container">
                    {bestsellers.map(perfum => {
                        return (
                            <BestsellersPerfum key={perfum.id} perfum={perfum}></BestsellersPerfum>
                        )
                    })}
                </div>
                <div className="arrow-right" onClick={() => {moveProducts("right")}}>
                    <FaArrowRight></FaArrowRight>
                </div>
            </div>
        </div>
    )
}