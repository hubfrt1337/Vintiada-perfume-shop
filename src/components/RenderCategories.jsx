export function RenderCategories({ perfumes, type }) {
    let filteredArray;
    if(type === "woody"){
         filteredArray = perfumes.filter(perfum => perfum.category.includes(type) || perfum.category.includes("earthy") || perfum.category.includes("amber") || perfum.category.includes("leather"))
    }
    
    return (
        <section className="products-flex">
            {filteredArray.map(perfum => {
                    return (
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
                        </div>

                    )
                })}
        </section>
    )
}