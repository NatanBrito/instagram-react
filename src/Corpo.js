import Esquerda from "./scripts.js/Esquerda";
import SideBar from "./scripts.js/SideBar";
export default function Corpo (){
    return(
        <div className="corpo">
            <Esquerda />
            <SideBar />
        </div>
    )
}