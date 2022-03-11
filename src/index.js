import ReactDOM from "react-dom";
import HeaderEsquerda from "./scripts.js/HeaderEsquerda";
import LogoMobile from "./scripts.js/LogoMobile";
import InstagramMobile from "./scripts.js/InstagramMobile";
import PesquisarHeader from "./scripts.js/PesquisarHeader";
import Icones from "./scripts.js/Icones";
import IconesMobile from "./scripts.js/IconesMobile";
import Stories from "./scripts.js/Stories";
import Setinha from "./scripts.js/Setinha";
import Posts from "./scripts.js/Posts";
import Usuario from "./scripts.js/Usuario"
import TituloSugestao from "./TituloSugestao";
import Sugestao from "./scripts.js/Sugestao";
import Links from "./scripts.js/Links";
import Copyright from "./scripts.js/Copyright";
import FundoMobile from "./scripts.js/FundoMobile";
function App() {
    return (
      <>
      <div className="navbar">
        <div className="container">
        <HeaderEsquerda />
        <LogoMobile />
        <InstagramMobile />
        <PesquisarHeader />
        <Icones />
        <IconesMobile />
        </div>
      </div>
      <div className="corpo">
        <div className="esquerda">
        <div className="stories">
         <Stories />
         <Setinha />
         </div>
         <Posts />
        </div>
        <div className="sidebar">
        <Usuario />
        <div className="sugestoes">
        <TituloSugestao />
        <Sugestao />
        </div>
        <Links />
        <Copyright />
        </div>
      </div>
      <FundoMobile />
      </>
    );
  }
  ReactDOM.render(<App />, document.querySelector(".root"));