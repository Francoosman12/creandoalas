import { NavLink } from "react-router-dom";
import "animate.css";
import "../css/header.css";

const Header = () => {
  return (
    <div class="container-header w-100">
      <div>
        <img
          className="image-header animate__animated animate__fadeInDown"
          src="https://i.ibb.co/T1VX46R/logo-creando-alas-modified.png"
          alt=""
        />
      </div>

      <nav class="navbar navbar-expand-lg mt-3">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink className="nav-link menu" to="/">
                  Menu
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link nosotros" to="/nosotros">
                  Nosotros
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link contacto" to="/contacto">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
