import { useOutletContext } from "react-router";
import { Header } from "../components/Header";
import { RenderCategories } from "../components/RenderCategories";

export function Fresh(){
    const {perfumes} = useOutletContext();
    return (
        <>
        <Header></Header>
        <RenderCategories perfumes={perfumes} type="fresh"></RenderCategories>
        </>
    )
}