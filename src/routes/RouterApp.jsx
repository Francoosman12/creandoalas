import { Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import AboutUs from "../pages/AboutUs";
import Contacto from "../pages/Contacto";
import Servicio from "../pages/Servicio";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/nosotros" element={<AboutUs />} />
      <Route path="/servicio" element={<Servicio />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
};

export default RoutesApp;
