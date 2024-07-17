import { Card } from "./Components-home/Card/Card";
import { Depoiments } from "./Components-home/Depoiments/Depoiments";
import { Footer } from "./Components-home/Footer/Footer";
import { Marmitas } from "./Components-home/Marmitas/Marmitas";
import { Menu } from "./Components-home/Menu/Menu";
import { Parceiros } from "./Components-home/Parceiros/Parceiros";
import { Pre } from "./Components-home/Pre-Menu/Pre";
import { Sobre } from "./Components-home/Sobre/Sobre";
import { Start } from "./Components-home/Start/Start";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Home.css";

export function Home() {
  const [showButton, setShowButton] = useState(false);

  // Função para manipular o evento de scroll
  const handleScroll = () => {
    // Calcule a posição do meio da página
    const middleOfPage = window.innerHeight / 2;

    // Verifique se a posição do scroll é maior que o meio da página
    const isPastMiddle = window.scrollY > middleOfPage;

    // Atualize o estado com base na condição
    setShowButton(isPastMiddle);
  };

  // Adicione um ouvinte de evento de scroll quando o componente for montado
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remova o ouvinte de evento quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="main-home">
      <Pre />
      <Menu />
      <Start />
      {showButton && (
        <button className="scroll-button" onClick={() => window.scrollTo(0, 0)}>
          <FaArrowUp className="scrolltotop-icon" />
        </button>
      )}
      <Card />
      <Marmitas />
      <Sobre />
      <Parceiros />
      <Depoiments />
      <Footer />
    </main>
  );
}
