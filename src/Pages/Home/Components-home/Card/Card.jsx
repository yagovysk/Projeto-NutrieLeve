import React from "react";
import { FaCreditCard } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Card.css";

export function Card() {
  const isMobile = window.innerWidth <= 768;

  const cardItems = [
    {
      icon: <FaCreditCard className="icon-card" />,
      text: "Indique um amigo e ganhe 15% de desconto, promoção não cumulativa",
    },
    {
      icon: <FaGoogle className="icon-card" />,
      text: "Ganhe um muffin ao avaiar no google, válido para próxima compra",
    },
    {
      icon: <MdDeliveryDining className="icon-card" />,
      text: "Frete grátis na primeira compra, favor consultar regiões",
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
