import { useOutletContext, useParams } from 'react-router';
import './Product.css';
import { useState } from 'react';
export function Product() {
    const { perfumes } = useOutletContext()
    const { id } = useParams();
    const product = perfumes.find(p => p.id === Number(id))
    const [val, setVal] = useState(1);
    const changeVal = (sign) => {
        if (sign === "-") {
            if (val <= 0) {
                setVal(0)
            } else {
                setVal(val - 1)
            }
        }
        else if (sign === "+") {
            setVal(val + 1)
        }

    }
    return (
        <div className="product-page-container">
            {product
                ? (
                    <>
                        <div className="img-container"><img src={product.image}></img></div>
                        <div className="product-info">
                            <div>{product.name}</div>
                            <div>{product.brand}</div>
                            <div className="stars-container"><img src={`/rating-${product.stars}.png`}></img></div>
                            <div>{(product.price / 100).toFixed(2)}$</div>
                            <div className="quantity-container qua-cnt">
                                <button onClick={() => {
                                    changeVal("-")
                                }} className="minus">-</button>
                                <span className="quantity">{val}</span>
                                <button onClick={() => { changeVal("+") }} className="plus">+</button>
                                <button className="add">Add to Cart</button>
                            </div>
                        </div>
                        <div className="complete-info">
                            <div className="categories">
                                <div className="type-product">Type: <span>{product.type}</span></div>
                                <div className="category">Category: <span>{product.category}</span></div>
                                <div className="gender">Gender: <span>{product.gender}</span></div>
                            </div>
                            <p className="notes-title">Notes</p>
                            <div className="notes-container">
                                
                                <div className="top">
                                    <div className="notes-text">Top: </div>{product.notes.top.map((p, i) => {
                                        return (<div className="single-text" key={i}>{p}</div>)
                                    })}
                                </div>
                                <div className="heart">
                                    <div className="notes-text">Heart: </div>
                                    {product.notes.heart.map((p, i) => {
                                        return (<div className="single-text" key={i}>{p}</div>)
                                    })}
                                </div>
                                <div className="base">
                                    <div className="notes-text">Base: </div>
                                    {product.notes.base.map((p, i) => {
                                        return (<div className="single-text" key={i}>{p}</div>)
                                    })}
                                </div>
                            </div>
                        </div>
                    </>
                )
                : <div>Empty</div>}
        </div>
    )

}