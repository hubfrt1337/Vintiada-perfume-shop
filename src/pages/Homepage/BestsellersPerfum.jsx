import { useState } from "react"
import { addToCart } from "../../utils/cartUtils"
import { useOutletContext } from "react-router"
import { Link } from "react-router"
export function BestsellersPerfum({ perfum }) {
    const { setCart } = useOutletContext()
    const [quantity, setQuantity] = useState(1)
    const [isEditing, setIsEditing] = useState(false)
    const handleAddToCart = async (product, amount) => {

        try {
            const response = await addToCart(product, amount)
            setCart(response)
        }
        catch (error) {
            console.log(error)
        }

    }
    const controlledInput = (e) => {
        setQuantity(Number(e.target.value))
    }
    return (
        <div className="kontener">
            <Link style={{textDecoration: "none"}}>
                <div className="flex-best" >

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
            </Link>
            <div className="quantity-container">
                {!isEditing ? (
                    <>
                        <div className="quantity-div">{quantity}</div>
                        <button className="edit-btn" onClick={() => { setIsEditing(true) }}>Edit</button>
                    </>
                ) : (
                    <>

                        <input className="input-quantity" type="number" onChange={controlledInput} value={quantity}></input>
                        <button className="save-btn" onClick={() => { if (!quantity) { setQuantity(0) } setIsEditing(false) }} >save</button>

                    </>
                )}

                <button
                    className="add-btn"
                    onClick={() => { handleAddToCart(perfum, quantity) }}
                >Add</button>
            </div>
        </div>
    )
}