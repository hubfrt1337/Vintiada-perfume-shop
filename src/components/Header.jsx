import { useOutletContext } from "react-router";
import "./header.css"
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { NavLink, Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import e from "cors";
export function Header() {
    const {perfumes} = useOutletContext()
    const { cart } = useOutletContext()
    const [quantityNumber, setQuantityNumber] = useState(0)
    const [searchValue, setSearchValue] = useState("");
    const [filteredSearch, setFilteredSearch] = useState(perfumes);
    const productsRef = useRef();
    const inputRef = useRef();
    useEffect(() => {
        if(cart.length > 0) {
          let number = cart.reduce((acc, curr) => acc + curr.quantity, 0)
            setQuantityNumber(number)
        }
        else setQuantityNumber(0)
    }, [cart])

    const handleSearchChange = (e) => {
        const searching = e.target.value
        setSearchValue(searching);
        
        //if(searching === '') { setFilteredSearch(perfumes); return }
        const filtered = perfumes.filter(perfum => {
            if(perfum.name.toLowerCase().includes(searching.toLowerCase())){
                return perfum;
            }
        })
        setFilteredSearch(filtered)
        console.log(filtered)
    }
    const showContainer = (e, ref) => {
        ref.current.classList.add("show-ref")
        console.log(ref.current)
    }
    window.addEventListener("click", (e) => {
        if(!e.target.classList.contains("search-input")){
            productsRef.current.classList.remove("show-ref")
        }
    })
    return (
        <header>
            <nav className="navbar">
                <div className="left-section">
                    <div className="company-icon"><Link to="/" style={{ textDecoration: "none" }}>Vintiada</Link></div>
                </div>
                <div className="middle-section">
                    <input
                        value={searchValue}
                        onChange={handleSearchChange}
                        className="search-input"
                        type="text"
                        placeholder="Search for perfume"
                        onClick={(e) => showContainer(e, productsRef)}
                        ref={inputRef}
                        >    
                    </input>
                    <div ref={productsRef} className="header-products">{filteredSearch.map(perfum => <div>{perfum.name}</div>)}</div>
                </div>
                <div className="right-section">
                    <div className="sign-in">
                        <VscAccount className="icons-header" />
                    </div>
                    <div className="cart-container">
                        <NavLink to="/cart">
                            <IoCartOutline className="icons-header" /></NavLink>
                            {cart.length > 0 
                            ? <div className="cart-count">{quantityNumber}</div>
                            : ""
                            }
                        
                    </div>
                </div>
            </nav>
            <div className="types-container">
                <NavLink to="/masculine"
                    className={({ isActive }) => isActive ? "active-link" : "inactive-link"}><div className="type">Masculine</div></NavLink>
                <NavLink to="/feminine"
                    className={({ isActive }) => isActive ? "active-link" : "inactive-link"}><div className="type">Feminine</div></NavLink>
                <NavLink to="/unisex"
                    className={({ isActive }) => isActive ? "active-link" : "inactive-link"}><div className="type">Unisex</div></NavLink>
                <NavLink to="/woody"
                    className={({ isActive }) => isActive ? "active-link" : "inactive-link"}><div className="type">Woody</div></NavLink>
                <NavLink to="/floral"
                    className={({ isActive }) => isActive ? "active-link" : "inactive-link"}><div className="type">Floral</div></NavLink>
                <NavLink to="/fresh"
                    className={({ isActive }) => isActive ? "active-link" : "inactive-link"}><div className="type">Fresh</div></NavLink>
                <NavLink to="/oriental"
                    className={({ isActive }) => isActive ? "active-link" : "inactive-link"}><div className="type">Oriental</div></NavLink>
            </div>
        </header>
    )
}