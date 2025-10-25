import "./Bestsellers.css"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
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
                            <div className="flex-best" key={perfum.id}>
                                <div className="image-container">
                                    <img src={perfum.image}></img>
                                </div>
                                <div className="perfum-brand child">{perfum.brand}</div>
                                <div className="perfum-name child">{perfum.name}</div>
                                <div className="perfum-type child">{perfum.gender === "unisex"
                                    ? "Perfume for Everyone"
                                    : perfum.gender === "feminine"
                                        ? "Perfume for Women"
                                        : "Perfume for Men"}</div>
                                <div className="stars-container"><img src={`/rating-${perfum.stars}.png`}></img></div>
                                <div>{(perfum.price / 100).toFixed(2)}$</div>
                            </div>
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