import "./Bestsellers.css"
import { useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { ArrivalsPerfum } from "./ArrivalsPerfum";
export function Arrivals({ perfumes }) {
    const wrapper = useRef()
    const moveProducts = (direction) => {
        if (wrapper.current) {
            wrapper.current.scrollBy({
                left: direction === "left" ? -200 : 200,
                behavior: "smooth"
            })
        }
    }
    const arrivals = perfumes.slice(12, 18);
    return (
        <div className="best-sellers-container arrivals">
            <div className="title-best">New Arrivals</div>
            <div className="scroll-wrapper">
                <div className="arrow-left" onClick={() => { moveProducts("left") }}>
                    <FaArrowLeft />
                </div>
                <div ref={wrapper} className="perfumes-container">
                    <ArrivalsPerfum arrivals={arrivals}></ArrivalsPerfum>
                </div>
                <div className="arrow-right" onClick={() => {moveProducts("right")}}>
                    <FaArrowRight></FaArrowRight>
                </div>
            </div>
        </div>
    )
}