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
                            <div className="perfum-brand">{perfum.brand}</div>
                            <div className="perfum-name">{perfum.name}</div>
                            <div className="perfum-type">{perfum.gender === "unisex"
                                ? "Perfume for Everyone"
                                : perfum.gender === "feminine"
                                    ? "Perfume for women"
                                    : "Perfume for men"}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}