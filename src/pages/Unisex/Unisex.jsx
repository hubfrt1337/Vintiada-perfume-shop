import { useOutletContext } from "react-router";
import { Header } from "../../components/Header";
import { RenderPerfumes } from "../../components/RenderPerfumes";
export function Unisex(){
    const {perfumes} = useOutletContext();
    return (
        <>
        <Header></Header>
        <RenderPerfumes perfumes={perfumes} type="unisex"></RenderPerfumes>
        </>
    )
}