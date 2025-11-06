import { FooterComp } from "../../components/FooterComp";
import { Header } from "../../components/Header.jsx";
import { useEffect, useState } from "react";
import { ProfilPage } from "./ProfilePage.jsx";
import "./LoginPage.css"

export function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registered, setRegistered] = useState(false);

    useEffect(() => {
        const fetchForm = async () => {
            const response = await fetch("http://localhost:3001/api/form")
            const data = await response.json();
            if(data.username && data.password){
                setRegistered(true);
                setUsername(data.username);
                setPassword(data.password);
            }
            
        }
        fetchForm();
    });
    const fetchFormData = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })

            });
            if (!response.ok) {
                throw new Error("Failed to submit form data");
            }
            const data = await response.json();
            console.log("Form data submitted successfully:", data);

        }
        catch (error) {
            console.error("Error fetching form data:", error);
        }
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchFormData();
        setRegistered(true);

    }
    return (
        <>
            <Header></Header>
            {!registered ? <form className="form-singup" onSubmit={handleSubmit}>
                <label>Username
                    <input
                        onChange={handleUsernameChange}
                        value={username}
                        type="text"
                        required></input>
                </label>
                <label>Password
                    <input
                        onChange={handlePasswordChange}
                        value={password}
                        type="password" required></input>
                </label>
                <button type="submit">Sign-up</button>
            </form>
                : <ProfilPage username={username}></ProfilPage>
            }
        </>
    )
}