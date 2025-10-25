import "./Bestsellers.css"
export function Arrivals({perfumes}){
    const arrivals = perfumes.slice(12,18);
    return (
        <div className="best-sellers-container arrivals">
            <div className="title-best">New Arrivals</div>
            <div className="perfumes-container">
                {arrivals.map(perfum => {
                    return (
                        <div className="flex-best" key={perfum.id}>
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
                        </div>
                    )
                })}
            </div>
        </div>
    )
}