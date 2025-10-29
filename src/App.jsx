import { Header } from "./components/Header"
import { HomePage } from "./pages/Homepage/HomePage"
import { Outlet } from "react-router";
import {useState, useEffect, createContext} from "react"
export const CartContext = createContext()
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
  return (
    <>
    <CartContext.Provider value={{cart, setCart}}>
    <Outlet context={{perfumes, setPerfumes}}></Outlet>
    </CartContext.Provider>
    
    </>
  )
}

export default App
