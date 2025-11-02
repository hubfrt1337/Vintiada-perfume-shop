import { useOutletContext } from "react-router";
import { Header } from "../../components/Header";
import { Product } from "./Product";

export function ProductsPage(){
    
    return (
        <>
        <Header></Header>
        <Product></Product>
        </>
    )
}