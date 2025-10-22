import { useEffect } from "react"
import "./Bestsellers.css"
export function BestSellers(){
    useEffect(() => {
        const fetchPerfumes = async () => {
            const response = await fetch('/perfumes.json')
            const data = await response.json()
            console.log(data)
        }
        fetchPerfumes()
    }, [])
    return (
        <div className="best-sellers-container">
            <div className="title-best">Best Sellers</div>
        </div>
    )
}