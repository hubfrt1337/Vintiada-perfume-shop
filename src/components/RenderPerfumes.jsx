import { Link } from "react-router"
import { FooterComp } from "./FooterComp"
export function RenderPerfumes({ perfumes, type }) {
    return (
        <>
        <section className="products-flex">
            {perfumes.filter(perfum => perfum.gender === type)
                .map(perfum => {
                    return (
                        <Link to={`/product/${perfum.id}`} key={perfum.id} style={{ textDecoration: "none" }}>
                            <div className="flex-best box" >
                                <div className="image-container">
                                    <img src={perfum.image}></img>
                                </div>
                                <div className="perfum-brand">{perfum.brand}</div>
                                <div className="perfum-name">{perfum.name}</div>
                                <div className="perfum-type">Perfume for
                                    {perfum.gender === "masculine" ? " Men" :
                                        perfum.gender === "feminine" ? " Women"
                                            : " Everyone"}

                                </div>
                                <div className="stars-container"><img src={`/rating-${perfum.stars}.png`}></img></div>
                                <div>{(perfum.price / 100).toFixed(2)}$</div>
                            </div>
                        </Link>
                    )
                })}
        </section>
        </>
    )
}