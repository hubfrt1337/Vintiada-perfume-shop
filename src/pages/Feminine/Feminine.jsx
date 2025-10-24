import { useOutletContext } from "react-router";
import { Header } from "../../components/Header";
import { RenderPerfumes } from "../../components/RenderPerfumes";
export function Feminine(){
    const {perfumes} = useOutletContext();
    return (
        <>
        <Header></Header>
        <RenderPerfumes perfumes={perfumes} type="feminine"></RenderPerfumes>
        </>
    )
}