import { Header } from "../../components/Header";
import { useState, useEffect} from "react";
import { useOutletContext } from "react-router";
import "./CartPage.css"
import { addToCart, subtractFromCart } from "../../utils/cartUtils.js";
import { EmptyCart } from "../../components/EmptyCart.jsx";


export function CartPage() {
    const {cart, setCart} = useOutletContext()
    const [cost, setCost] = useState(3.99)
    useEffect(() => {
        const fetchCart = async () => {
            const response = await fetch('http://localhost:3001/api/cart')
            const data = await response.json();
            setCart(data)
        }
        fetchCart()
    }, [setCart])
    const dates = [
        new Date().toDateString(),
        new Date(new Date().setTime(new Date().getTime() + (72 * 60 * 60 * 1000))).toDateString(),
        new Date(new Date().setTime(new Date().getTime() + (120 * 60 * 60 * 1000))).toDateString(),
    ]
    const handleAddToCart = async (product) => {
        try {
            const updated = await addToCart(product)
            setCart(updated)

        }
        catch (error) {
            console.log("failes to add to cart", error)
        }
    }
    const handleSubtractCart = async (product) => {
        try {
            const updated = await subtractFromCart(product);
            setCart(updated)
        }
        catch (error) {
            console.log("Failed to subtrack product from cart", error)
        }
    }
    function checkInputs(e) {
        setCost(Number(e.target.value))
    }
    function calculate() {
        if (cart.length > 0) {
            const numbers = cart.map(c => c.price * c.quantity)
            const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
            return (cost + (total / 100)).toFixed(2)
        }
    }
    const order = async () => {
        const response = await fetch('http://localhost:3001/api/cart', {
            method: "DELETE"
        })
        const updated = await response.json()
        setCart(updated)
    }
    const deleteProduct = async (product) => {
        const response = await fetch(`http://localhost:3001/api/cart/${product.id}`, {
            method: "DELETE"
        })
        const updated = await response.json()
        setCart(updated)
    }
    return (
        <>
            <Header></Header>
            {cart.length > 0 ? <div className="cart-page-container">
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
                                    <button onClick={() => {
                                        handleSubtractCart(c)
                                    }} className="minus">-</button>
                                    <span className="quantity">{c.quantity}</span>
                                    <button onClick={() => { handleAddToCart(c) }} className="plus">+</button>
                                </div>
                                <div onClick={() => {deleteProduct(c)}} className="delete">Delete</div>
                            </div>
                        </div>
                    )
                })}
                <div className="order-summary">
                    <div className="delivery-title">Delivery options:</div>
                </div>
                <div className="order-date-container">
                    <div className="order-date">{dates[2]}</div>
                    <div className="order-cost">Cost: 3.99$</div>
                    <input name="cost" defaultChecked={true} value="3.99" onChange={checkInputs} className="input-check" type="radio" ></input>
                </div>
                <div className="order-date-container">
                    <div className="order-date">{dates[1]}</div>
                    <div className="order-cost">Cost: 5.99$</div>
                    <input name="cost" value="5.99" onChange={checkInputs} className="input-check" type="radio"  ></input>
                </div>
                <div className="order-date-container">
                    <div className="order-date">{dates[0]}</div>
                    <div className="order-cost">Cost: 6.99$</div>
                    <input name="cost" value="6.99" onChange={checkInputs}
                        className="input-check" type="radio" ></input>
                </div>
                <div className="payment-summary">
                    <p className="pay-text">payment-summary:</p>
                    <div className="pay-cost">{calculate()}$ <button onClick={order}>Order</button></div>
                </div>
            </div>
            : <EmptyCart></EmptyCart>
            }
        </>
    )
}