import { Header } from "./components/Header"
import { HomePage } from "./pages/Homepage/HomePage"
import { Outlet } from "react-router";
import { useState, useEffect } from "react"
import { FooterComp } from "./components/FooterComp.jsx";
function App() {
  const [perfumes, setPerfumes] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    const fetchPerfumes = async () => {
      const response = await fetch('/perfumes.json')
      const data = await response.json()
      setPerfumes(data)
    }
    fetchPerfumes()
  }, [])
  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch('http://localhost:3001/api/cart')
      const data = await response.json();
      setCart(data)
    }
    fetchCart()
  }, [])
  return (
    <>
      <div className="wrapper">
        <div className="main-content">
          <Outlet context={{ perfumes, setPerfumes, cart, setCart }}></Outlet>
        </div>
        <footer><FooterComp></FooterComp></footer>
      </div>
    </>
  )
}

export default App
