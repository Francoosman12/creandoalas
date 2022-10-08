import "animate.css";
import { BrowserRouter } from "react-router-dom";
import HeaderApp from "./components/HeaderApp";
import RoutesApp from "./routes/RouterApp.jsx";
import FooterApp from "./components/FooterApp.jsx";

function App() {
  return (
    <BrowserRouter>
      <HeaderApp />
      <RoutesApp />
      <FooterApp />
    </BrowserRouter>
  );
}

export default App;
