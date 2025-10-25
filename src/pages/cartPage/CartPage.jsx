import { Header } from "../../components/Header";
import { useState, useEffect } from "react";
import "./CartPage.css"
import { addToCart } from "../../utils/cartUtils.js";
export function CartPage() {
    const [cart, setCart] = useState(null)
    useEffect(() => {
        const fetchCart = async () => {
            const response = await fetch('http://localhost:3001/api/cart')
            const data = await response.json();
            setCart(data)
        }
        fetchCart()
    }, [])
    const handleAddToCart = async (product) => {
        try {
           const updated = await addToCart(product)
           setCart(updated)
            
        }
        catch (error) {
            console.log("failes to add to cart", error)
        }
    }
    return (
        <>
            <Header></Header>
            <div className="cart-page-container">
                {cart && cart.map(c => {
                    return (
                        <div key={c.id} className="product-page-info">
                            <div className="page-image-container">
                                <img src={c.image}></img>
                            </div>
                            <div className="cart-product-info">
                                <div>
                                    <div className="product-page-name">{c.name}</div>
                                    <div className="product-page-brand">{c.brand}</div>
                                </div>

                                <div className="product-page-price">{(c.price / 100).toFixed(2)}$</div>
                                <div className="quantity-container">
                                    <button className="minus">-</button>
                                    <span className="quantity">1</span>
                                    <button onClick={() => {handleAddToCart(c)}} className="plus">+</button>
                                </div>
                                <div className="delete">Delete</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}