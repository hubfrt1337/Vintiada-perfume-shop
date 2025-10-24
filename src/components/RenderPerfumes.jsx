export function RenderPerfumes({ perfumes, type }) {
    return (
        <section className="products-flex">
            {perfumes.filter(perfum => perfum.gender === type)
                .map(perfum => {
                    return (
                        <div className="flex-best box" key={perfum.id}>
                            <div className="image-container">
                                <img src={perfum.image}></img>
                            </div>
                            <div className="perfum-brand">{perfum.brand}</div>
                            <div className="perfum-name">{perfum.name}</div>
                            <div className="perfum-type">Perfume for men</div>
                        </div>

                    )
                })}
        </section>
    )
}