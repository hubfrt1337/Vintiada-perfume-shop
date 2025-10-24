import { Header } from "./components/Header"
import { HomePage } from "./pages/Homepage/HomePage"
import { Outlet } from "react-router";
import {useState, useEffect} from "react"
function App() {
  const [perfumes, setPerfumes] = useState([]);
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
    <Outlet context={{perfumes, setPerfumes}}></Outlet>
    </>
  )
}

export default App
