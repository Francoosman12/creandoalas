import { Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import AboutUs from "../pages/AboutUs";
import Contacto from "../pages/Contacto";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/nosotros" element={<AboutUs />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
};

export default RoutesApp;
