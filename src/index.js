import ReactDOM from "react-dom";
import FundoMobile from "./scripts.js/FundoMobile";
import NavBar from "./NavBar";
import Corpo from "./Corpo";
function App() {
    return (
      <>       
       <NavBar />
       <Corpo />
       <FundoMobile />
      </>
    );
  }
  ReactDOM.render(<App />, document.querySelector(".root"));