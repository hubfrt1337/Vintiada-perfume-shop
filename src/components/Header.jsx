import "./header.css"
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router";
export function Header({perfumes}) {
    return (
        <header>
            <nav className="navbar">
                <div className="left-section">
                    <div className="company-icon">Vintiada</div>
                </div>
                <div className="middle-section">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search for perfume">
                    </input>
                </div>
                <div className="right-section">
                    <div className="sign-in">
                        <VscAccount className="icons-header"/>
                    </div>
                    <div className="cart-container">
                        <IoCartOutline className="icons-header"/>
                    </div>
                </div>
            </nav>
            <div className="types-container">
                    <NavLink to="/masculine"
                    className={({isActive}) => isActive ? "active-link" : "inactive-link"}><div className="type">Masculine</div></NavLink>
                    <NavLink to="/feminine"
                    className={({isActive}) => isActive ? "active-link" : "inactive-link"}><div className="type">Feminine</div></NavLink>
                    <NavLink to="/unisex"
                    className={({isActive}) => isActive ? "active-link" : "inactive-link"}><div className="type">Unisex</div></NavLink>
                    <NavLink to="/woody"
                    className={({isActive}) => isActive ? "active-link" : "inactive-link"}><div className="type">Woody</div></NavLink>
                    <NavLink to="/floral"
                    className={({isActive}) => isActive ? "active-link" : "inactive-link"}><div className="type">Floral</div></NavLink>
                    <NavLink to="/fresh"
                    className={({isActive}) => isActive ? "active-link" : "inactive-link"}><div className="type">Fresh</div></NavLink>
                    <NavLink to="/oriental"
                    className={({isActive}) => isActive ? "active-link" : "inactive-link"}><div className="type">Oriental</div></NavLink>
            </div>
        </header>
    )
}