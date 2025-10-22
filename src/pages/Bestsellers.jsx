import { useEffect, useState } from "react"
import "./Bestsellers.css"
export function BestSellers(){
    const [perfumes, setPerfumes] = useState([]);
    useEffect(() => {
        const fetchPerfumes = async () => {
            const response = await fetch('/perfumes.json')
            const data = await response.json()
            setPerfumes(data)
        }
        fetchPerfumes()
    }, [])
    const bestsellers = perfumes.filter(perfum => perfum.bestseller)
    .sort(() => 0.5 - Math.random()).slice(0, 6)
    
    return (
        <div className="best-sellers-container">
            <div className="title-best">Best Sellers</div>
            <div className="perfumes-container">
                {bestsellers.map(perfum => {
                    return (
                        <div key={perfum.id}>
                        <div className="image-container">
                            <img src={perfum.image}></img>
                        </div>
                        <div key={perfum.id}>{perfum.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}