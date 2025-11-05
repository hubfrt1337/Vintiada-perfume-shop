import { Link } from "react-router";
export function RenderCategories({ perfumes, type }) {
    let filteredArray;
    if (type === "woody") {
        filteredArray = perfumes.filter(perfum => perfum.category.includes(type) || perfum.category.includes("earthy") || perfum.category.includes("amber") || perfum.category.includes("leather"))
    } else if (type === "floral") {
        filteredArray = perfumes.filter(perfum => perfum.category.includes(type) ||
            perfum.category.includes("powdery") ||
            perfum.category.includes("fruity") ||
            perfum.category.includes("gourmand") ||
            perfum.category.includes("metallic")
        )
    } else if (type === "fresh") {
        filteredArray = perfumes.filter(perfum =>
            perfum.category &&
            (
                perfum.category.includes("fresh") ||            // fresh, fresh aquatic, fresh aromatic, woody fresh
                perfum.category.includes("aquatic") ||          // aquatic, aquatic aromatic, aquatic mineral
                perfum.category.includes("citrus") ||           // citrus, citrus fresh, citrus aromatic
                perfum.category.includes("herbal") ||           // herbal fresh
                perfum.category.includes("green")               // green aromatic, green fruity
            )
        );
    } else if (type === "oriental") {
        filteredArray = perfumes.filter(perfum =>
            perfum.category &&
            (
                perfum.category.includes("oriental") ||
                perfum.category.includes("amber") ||
                perfum.category.includes("smok") ||   // smoky, smoke
                perfum.category.includes("resin") ||
                perfum.category.includes("gourmand") ||
                perfum.category.includes("leather") ||
                perfum.category.includes("oud")
            )
        );
    }

    return (
        <section className="products-flex">
            {filteredArray.map(perfum => {
                return (
                    <Link to={`/product/${perfum.id}`} key={perfum.id} style={{ textDecoration: "none" }}>
                        <div className="flex-best box" key={perfum.id}>
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
    )
}