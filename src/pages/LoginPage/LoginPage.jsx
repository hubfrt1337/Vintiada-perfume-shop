import { FooterComp } from "../../components/FooterComp";
import { Header } from "../../components/Header.jsx";
import { useState } from "react";
import "./LoginPage.css"

export function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-up logic here
    }
    return (
        <>
            <Header></Header>
           <form onSubmit={handleSubmit}>
                <label>Username
                <input 
                onChange={handleUsernameChange}
                value={username}
                type="text"></input>
                </label>
                <label>Password
                <input 
                onChange={handlePasswordChange}
                value={password}
                type="password"></input>
                </label>
                <button type="submit">Sign-up</button>
            </form>
        </>
    )
}