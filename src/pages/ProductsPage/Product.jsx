import { useOutletContext, useParams } from 'react-router';
//import './Product.css';
export function Product() {
    const { perfumes } = useOutletContext()
    const { id } = useParams();
    const product = perfumes.find(p => p.id === Number(id))
    return (
        <div className="product-page-container">
            {product 
            ? (
                <>
            <div className="img-container"><img src={product.image}></img></div>
            <div className="product-info">
                <div>{product.name}</div>
                <div>{product.brand}</div>
            </div>
            </>
        )
        : <div>Empty</div> }
        </div>
    )

}