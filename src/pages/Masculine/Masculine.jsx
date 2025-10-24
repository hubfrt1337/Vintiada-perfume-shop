import { useOutletContext } from "react-router";
import { Header } from "../../components/Header";

export function Masculine(){
    const {perfumes} = useOutletContext();
    console.log(perfumes)
    return (
        <>
        <Header></Header>
        </>
    )
}