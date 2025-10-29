import { useState } from "react"
export function BestsellersPerfum({ perfum }) {
    const [quantity, setQuantity] = useState(1)
    const [isEditing, setIsEditing] = useState(false)
    const controlledInput = (e) => {
        setQuantity(e.target.value)
    }
    return (
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
            <div className="quantity-container">
                {!isEditing ? (
                    <>
                        <div className="quantity-div">{quantity}</div>
                        <button className="edit-btn" onClick={() => {setIsEditing(true)}}>Edit</button>
                    </>
                ) : (
                    <>
                    
                    <input className="input-quantity" type="number" onChange={controlledInput} value={quantity}></input>
                    <button className="save-btn" onClick={() => {if(!quantity){setQuantity(0)} setIsEditing(false)}} >save</button>
                    
                    </>
                ) }

                <button className="add-btn">Add</button>
            </div>
        </div>
    )
}