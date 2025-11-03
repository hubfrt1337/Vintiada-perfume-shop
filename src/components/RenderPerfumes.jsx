import { Link } from "react-router"
export function RenderPerfumes({ perfumes, type }) {
    return (
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
                            </div>
                        </Link>
                    )
                })}
        </section>
    )
}