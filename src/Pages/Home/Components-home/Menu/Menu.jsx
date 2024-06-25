import { useState } from "react";
import "./Menu.css";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../../assets/logo.png";

export function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav-menu">
      <img src={logo} alt="Logo" className="logo" />
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`Menu-ul ${menuOpen ? "open" : ""}`}>
        <li>
          <Link className="button-menu" to="/" onClick={closeMenu}>
            Início
          </Link>
        </li>
        <li>
          <Link className="button-menu" to="marmitas" onClick={closeMenu}>
            Marmitas da semana
          </Link>
        </li>
        <li>
          <Link className="button-menu" to="about" onClick={closeMenu}>
            Sobre Nós
          </Link>
        </li>
        <li>
          <RouterLink
            className="button-menu"
            to="/salgados"
            onClick={closeMenu}
          >
            Salgados fit
          </RouterLink>
        </li>
      </ul>
      {menuOpen && (
        <div className="menu-close-icon" onClick={closeMenu}>
          <FaTimes />
        </div>
      )}
      <a href="#" className="button">
        Entre em contato
      </a>
    </nav>
  );
}
