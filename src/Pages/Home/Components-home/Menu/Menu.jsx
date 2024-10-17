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
          <Link
            smooth={true}
            duration={500}
            className="button-menu"
            to="marmitas"
            onClick={closeMenu}
          >
            Marmitas da semana
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            duration={500}
            className="button-menu"
            to="about"
            onClick={closeMenu}
          >
            Sobre Nós
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            duration={500}
            className="button-menu"
            to="depoiments"
            onClick={closeMenu}
          >
            Depoimentos
          </Link>
        </li>
        <li>
          <RouterLink
            className="button-menu"
            to="/salgados-fitness-doces-fitness"
            onClick={closeMenu}
          >
            Salgados & doces fit
          </RouterLink>
        </li>
      </ul>
      {menuOpen && (
        <div className="menu-close-icon" onClick={closeMenu}>
          <FaTimes />
        </div>
      )}
      <a
        href="https://wa.me/556199845648?text=Olá, vim pelo site, gostaria de mais informações."
        className="button"
        target="blank"
      >
        Entre em contato
      </a>
    </nav>
  );
}
