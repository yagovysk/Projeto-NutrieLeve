import { useState, useEffect } from "react";
import terra from "../../../../assets/logo-terra.png";
import malunga from "../../../../assets/logo-malunga.png";
import bio from "../../../../assets/logo-bio.png";
import "./Parceiros.css";

export function Parceiros() {
  const parceiros = [
    { img: terra, url: "https://www.instagram.com/terramadrebrasilia/" },
    { img: malunga, url: "https://www.instagram.com/mercado.malunga/" },
    { img: bio, url: "https://biomundo.com.br/" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % parceiros.length);
    }, 2000); // Change card every 2 seconds

    return () => clearInterval(interval);
  }, [parceiros.length]);

  const reorderedParceiros = isMobile
    ? [
        parceiros[(activeIndex + 1) % parceiros.length],
        parceiros[activeIndex],
        parceiros[(activeIndex + 2) % parceiros.length],
      ]
    : parceiros;

  return (
    <section className="section-parceiros">
      <h3>Parceiros</h3>
      <h4>Conheçam nossos parceiros</h4>
      <div className="cards-parceiros">
        {reorderedParceiros.map((parceiro, index) => (
          <div
            key={index}
            className={`card-parceiros ${
              isMobile
                ? index === 1
                  ? "active"
                  : ""
                : index === activeIndex
                ? "active"
                : ""
            }`}
            style={{
              transform: isMobile
                ? "none"
                : `translateX(${(index - activeIndex) * 100}%)`,
              opacity: isMobile ? 1 : index === activeIndex ? 1 : 0.5,
              zIndex: isMobile ? 1 : index === activeIndex ? 1 : 0,
            }}
          >
            <a href={parceiro.url} target="_blank" rel="noopener noreferrer">
              <img src={parceiro.img} alt={`Parceiro ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
