import { Link } from "react-router"
import "./EmptyCart.css"
export function EmptyCart(){
    return (
        <div className="empty-container">
            <div className="empty-text">Your cart is empty!</div>
            <Link to="/"><button className="btn-empty">Continue shopping</button></Link>
        </div>
    )
}