import React from "react";
import { useMediaQuery } from "react-responsive";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import foto1 from "../../../../assets/depoiments-1.png";
import foto2 from "../../../../assets/depoiments-2.png";
import foto3 from "../../../../assets/depoiments-3.jpg";
import "./Depoiments.css";

export function Depoiments() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const depoiments = [
    {
      stars: "★★★★★",
      text: "Só delícias. Podem ir que vale à pena!",
      img: foto1,
      name: "Carla Pinheiro",
    },
    {
      stars: "★★★★★",
      text: "Empresa impecável, comida sempre gostosa e ingredientes muito selecionados!! Recomendo demaiss!!",
      img: foto2,
      name: "Violeta Barrocas",
    },
    {
      stars: "★★★★★",
      text: "Atendimento perfeito, lanches excelentes!!! Recomendo muito, sem duvidas!",
      img: foto3,
      name: "Matheus Oliveira",
    },
  ];

  return (
    <section id="depoiments" className="section-depoiments">
      <h2>Avaliações</h2>
      {isMobile ? (
        <Carousel
          className="about-carousel"
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
        >
          {depoiments.map((depoiment, index) => (
            <div key={index} className="card-depoiment">
              <h3>{depoiment.stars}</h3>
              <p>{depoiment.text}</p>
              <div className="about-perfil">
                <img src={depoiment.img} alt={depoiment.name} />
                <h4>{depoiment.name}</h4>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="depoiments-cards">
          {depoiments.map((depoiment, index) => (
            <div key={index} className="card-depoiment">
              <h3>{depoiment.stars}</h3>
              <p>{depoiment.text}</p>
              <div className="about-perfil">
                <img src={depoiment.img} alt={depoiment.name} />
                <h4>{depoiment.name}</h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
