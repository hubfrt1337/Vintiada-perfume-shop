import { showAddedMessage } from "../../utils/showMessage";
import { useRef } from "react";
export function CartSummary({c, handleAddToCart, handleSubtractCart, deleteProduct}) {
            const addRef = useRef();
            const remRef = useRef();
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
                        <div className="quantity-container relat">
                            <button onClick={() => {
                                handleSubtractCart(c);
                                showAddedMessage(remRef, "removed")
                            }} className="minus">-</button>
                            <span className="quantity">{c.quantity}</span>
                            <button
                                onClick={() => { handleAddToCart(c); showAddedMessage(addRef) }}
                                className="plus">+</button>
                            <div ref={addRef} className="added-message absolut">Added</div>
                            <div ref={remRef} className="removed-message absolut">Removed</div>
                        </div>
                        <div onClick={() => { deleteProduct(c) }} className="delete">Delete</div>
                    </div>
                </div>
            )
}