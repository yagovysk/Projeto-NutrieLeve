import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiSubtractLine } from "react-icons/ri";
import { LuWheatOff } from "react-icons/lu";
import { LuMilkOff } from "react-icons/lu";
import { TbMilkOff } from "react-icons/tb";
import { TbCubeOff } from "react-icons/tb";
import coxinha from "../../../../assets/coxinha.png";
import maromba from "../../../../assets/maromba.png";
import empada from "../../../../assets/empada.png";
import "./Salgados.css";

export function Salgados() {
  const salgados = [
    {
      description: "Coxinha Proteica",
      info: "Salgado feito com frango e mandioca com recheio de frango.",
      Embalagem: "Embalagem de 500g (média de 10 unidades)",
      Valor: "R$ 41,00",
      image: coxinha,
      icons: [<LuWheatOff />, <LuMilkOff />],
    },
    {
      description: "Salgado Maromba",
      info: "Salgado feito de batata doce e frango com recheio de queijo muçarela",
      Embalagem: "Embalagem de 500g (média de 10 unidades)",
      Valor: "R$ 41,00",
      image: maromba,
      icons: [<LuWheatOff />, <LuMilkOff />],
    },
    {
      description: "Empada Fit",
      info: "Empada com recheio de frango, alho poró, palmito e tomate confit",
      Embalagem: "Embalagem de 400g (média de 8 unidades)",
      Valor: "R$ 42,00",
      image: empada,
      icons: [<LuWheatOff />, <LuMilkOff />],
    },
  ];
  const [quantities, setQuantities] = useState(Array(salgados.length).fill(0));

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const handleOrder = () => {
    const message = quantities
      .map((quantity, index) => {
        if (quantity > 0) {
          return `${salgados[index].description}: ${quantity}`;
        }
        return null;
      })
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/5561981774548?text=${encodeURIComponent(
      `Olá, gostaria de pedir esse(s) salgado(s):\n\n${message}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const totalQuantity = quantities.reduce((acc, quantity) => acc + quantity, 0);

  return (
    <section className="section-salgados">
      <div className="container-sombra-salgados">
        <div className="icons-off">
          <h4>
            <LuMilkOff className="icon-off" /> sem leite
          </h4>
          <h4>
            <LuWheatOff className="icon-off" /> sem glúten
          </h4>
          <h4>
            <TbMilkOff className="icon-off" /> sem lactose
          </h4>
          <h4>
            <TbCubeOff className="icon-off" /> sem açúcar
          </h4>
        </div>
        <article className="article-salgados">
          <h2>Salgados Fit</h2>
          <h3>Escolha e peça já seus salgados</h3>
        </article>
        <div className="card-salgados">
          {salgados.map((salgado, index) => (
            <div key={index} className="salgados">
              <img
                src={salgado.image}
                alt={salgado.description}
                className="salgados-image"
              />
              <p>{salgado.description}</p>
              <p>{salgado.info}</p>
              <p>{salgado.Embalagem}</p>
              <span>{salgado.Valor}</span>
              <div className="salgados-icons">
                {salgado.icons.map((icon, iconIndex) => (
                  <span className="icon-salgados" key={iconIndex}>
                    {icon}
                  </span>
                ))}
              </div>
              <div className="buttons-salgados">
                <button
                  className="button-salgado"
                  onClick={() => handleDecrement(index)}
                >
                  <RiSubtractLine />
                </button>
                <span className="quantity-salgados">{quantities[index]}</span>
                <button
                  className="button-salgado"
                  onClick={() => handleIncrement(index)}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="pedir-salgados"
          onClick={handleOrder}
          disabled={totalQuantity === 0}
        >
          Fazer Pedido
        </button>
      </div>
    </section>
  );
}
