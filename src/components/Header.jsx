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
                <div className="type">
                    <NavLink to="/masculine"
                    className={({isActive}) => isActive ? "active-link" : "inactive-link"}>Masculine</NavLink></div>
                <div className="type">Feminine</div>
                <div className="type">Unisex</div>
                <div className="type">Woody</div>
                <div className="type">Floral</div>
                <div className="type">Fresh</div>
                <div className="type">Oriental</div>
            </div>
        </header>
    )
}