import pix from "../../../../assets/pix.png";
import caju from "../../../../assets/caju.png";
import master from "../../../../assets/mastercard.png";
import elo from "../../../../assets/elo.png";
import american from "../../../../assets/sodexo.svg";
import visa from "../../../../assets/visa.png";
import alelo from "../../../../assets/alelo.png";
import vale from "../../../../assets/vale.png";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <article className="article-footer">
        <h4>Formas de pagamento</h4>
        <div className="cards-pagamentos">
          <img src={pix} alt="logo do método de pagamento pix" />
          <img src={caju} alt="logo método de pagamento caju" />
          <img src={master} alt="logo método de pagamento mastercard" />
          <img src={elo} alt="logo método de pagamento elo" />
          <img src={american} alt="logo método de pagamento american express" />
          <img src={visa} alt="logo método de pagamento visa" />
          <img src={alelo} alt="logo método de pagamento alelo" />
          <img src={vale} alt="logo método de pagamento vale refeição" />
        </div>
      </article>
      <div className="social-card">
        <a href="https://www.instagram.com/nutrielevebsb/" target="blank">
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/556199845648?text=Olá, vim pelo site, gostaria de mais informações."
          target="blank"
        >
          <FaWhatsapp />
        </a>
      </div>
      <a
        className="tgv-button"
        aria-label="botão que redireciona para o portfolio da empresa que desenvolveu o site, Empresa Togyro Group Victory."
        href="https://togyrogroupvictory.com/"
        target="blank"
      >
        Desenvolvido por Togyro <span>Group</span> Victory
      </a>
      <h4>&#169; Todos os Direitos Reservados a Nutri e Leve.</h4>
    </footer>
  );
}
