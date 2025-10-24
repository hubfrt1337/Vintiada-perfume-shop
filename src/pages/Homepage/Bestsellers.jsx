import "./Bestsellers.css"
export function BestSellers({perfumes, setPerfumes}) {
    
    const bestsellers = perfumes.filter(perfum => perfum.bestseller)
        .sort(() => 0.5 - Math.random()).slice(0, 6)

    return (
        <div className="best-sellers-container">
            <div className="title-best">Best Sellers</div>
            <div className="perfumes-container">
                {bestsellers.map(perfum => {
                    return (
                        <div className="flex-best" key={perfum.id}>
                            <div className="image-container">
                                <img src={perfum.image}></img>
                            </div>
                            <div className="perfum-brand">{perfum.brand}</div>
                            <div className="perfum-name">{perfum.name}</div>
                            <div className="perfum-type">{perfum.gender === "unisex"
                                ? "Perfume for Everyone"
                                : perfum.gender === "feminine"
                                    ? "Perfume for Women"
                                    : "Perfume for Men"}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}