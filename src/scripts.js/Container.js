import HeaderEsquerda from "./HeaderEsquerda";
import LogoMobile from "./LogoMobile";
import InstagramMobile from "./InstagramMobile";
import PesquisarHeader from "./PesquisarHeader";
import Icones from "./Icones";
import IconesMobile from "./IconesMobile";
export default function Container(){

    return(
        <div className="container">
            <HeaderEsquerda />
            <LogoMobile />
            <InstagramMobile />
            <PesquisarHeader />
            <Icones />
            <IconesMobile />

        </div>

    )
}