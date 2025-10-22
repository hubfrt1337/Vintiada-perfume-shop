import "./header.css"
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
export function Header() {
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
                    <div className="sign-in"></div>
                    <div className="cart-container">
                        <IoCartOutline className="cart-icon"/>
                    </div>
                </div>
            </nav>
            <div className="types-container">
                <div className="type">Mascuiline</div>
                <div className="type">Femine</div>
                <div className="type">Unisex</div>
                <div className="type">Feature</div>
                <div className="type">Feature</div>
                <div className="type">Feature</div>
                <div className="type">Feature</div>
            </div>
        </header>
    )
}