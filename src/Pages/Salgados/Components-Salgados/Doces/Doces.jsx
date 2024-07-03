import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiSubtractLine } from "react-icons/ri";
import "./Doces.css";

export function Doces() {
  const doces = [
    {
      description: "I - Salgado de Carne",
      imageUrl: "URL_DA_IMAGEM_1",
    },
    {
      description: "II - Salgado de Frango",
      imageUrl: "URL_DA_IMAGEM_2",
    },
    {
      description: "III - Salgado de queijo",
      imageUrl: "URL_DA_IMAGEM_3",
    },
    {
      description: "IV - Salgado de Legumes",
      imageUrl: "URL_DA_IMAGEM_4",
    },
    {
      description: "V - Salgado de mandioca",
      imageUrl: "URL_DA_IMAGEM_5",
    },
  ];
  const [quantities, setQuantities] = useState([0, 0, 0, 0, 0]);

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
          return `${doces[index].description}: ${quantity}`;
        }
        return null;
      })
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/5561981774548?text=${encodeURIComponent(
      `Olá, gostaria de pedir esse(s) doce(s):\n\n${message}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const totalQuantity = quantities.reduce((acc, quantity) => acc + quantity, 0);

  return (
    <section className="section-doces">
      <div className="container-sombra-doces">
        <article className="article-doces">
          <h2>Doces Fit</h2>
          <h3>Escolha e peça já seus docinhos</h3>
        </article>
        <div className="card-doces">
          {quantities.map((quantity, index) => (
            <div key={index} className="doces">
              <img
                src={doces[index].imageUrl}
                alt={doces[index].description}
                className="doces-image"
              />
              <p>{doces[index].description}</p>
              <button
                className="button-doces"
                onClick={() => handleDecrement(index)}
              >
                <RiSubtractLine />
              </button>
              <span className="quantity-doces">{quantity}</span>
              <button
                className="button-doce"
                onClick={() => handleIncrement(index)}
              >
                <FaPlus />
              </button>
            </div>
          ))}
        </div>
        <button
          className="pedir-doces"
          onClick={handleOrder}
          disabled={totalQuantity === 0}
        >
          Fazer Pedido
        </button>
      </div>
    </section>
  );
}
