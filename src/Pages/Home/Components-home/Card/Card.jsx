import React from "react";
import { FaCreditCard, FaPix } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Card.css";

export function Card() {
  // Determina o tamanho da tela
  const isMobile = window.innerWidth <= 768;

  const cardItems = [
    {
      icon: <FaCreditCard className="icon-card" />,
      text: "Frete grátis para compras acima de R$ 220,00",
    },
    {
      icon: <FaPix className="icon-card" />,
      text: (
        <>
          <span>10% OFF</span> para pagamentos no PIX
        </>
      ),
    },
    {
      icon: <MdDeliveryDining className="icon-card" />,
      text: "Entrega a partir de 30 minutos após a confirmação do pagamento",
    },
    {
      icon: <PiBowlFoodFill className="icon-card" />,
      text: "Pratos feitos com qualidade, sabor e compromisso",
    },
  ];

  return (
    <section className="section-card">
      {isMobile ? (
        <Carousel
          className="carousel-card"
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
        >
          {cardItems.map((item, index) => (
            <div className="container-card" key={index}>
              {item.icon}
              <p>{item.text}</p>
            </div>
          ))}
        </Carousel>
      ) : (
        cardItems.map((item, index) => (
          <div className="container-card" key={index}>
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))
      )}
    </section>
  );
}
