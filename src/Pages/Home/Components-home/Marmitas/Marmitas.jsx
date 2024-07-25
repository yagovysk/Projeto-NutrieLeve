import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiSubtractLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import "./Marmitas.css";

export function Marmitas() {
  const sabores = [
    "I - Torta de frango gratinada com queijo (sem farinha ), creme de milho com espinafre.",
    "II - Carne desfiada, purê de banana da terra, farofa de feijão fradinho com couve.",
    "III - Filé de frango grelhado, arroz de couve flor cremoso com vagem e cenoura (low carb)",
    "IV - Patinho moído, arroz integral, mix de legumes com alho, feijão carioca.",
    "V - Almôndegas de frango com quinoa ao molho de tomate e manjericão, arroz integral com legumes.",
    "VI - Moqueca de tilápia, arroz de coco, brócolis no vapor. 350g",
    "VII - Tilápia grelhada, legumes assados, purê de batata. 350g",
    "VIII - Tilápia com banana da terra gratinada com molho branco, arroz integral, eleta de legumes. 350 g",
  ];

  const precos = [21.0, 21.0, 21.0, 21.0, 21.0, 26.0, 26.0, 26.0];

  const [quantities, setQuantities] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

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
          return `${sabores[index]}: ${quantity} x R$${precos[index].toFixed(
            2
          )} = R$${(quantity * precos[index]).toFixed(2)}`;
        }
        return null;
      })
      .filter(Boolean)
      .join("\n"); // Adiciona quebra de linha entre os itens

    const totalPrice = quantities.reduce(
      (acc, quantity, index) => acc + quantity * precos[index],
      0
    );

    const whatsappUrl = `https://wa.me/556199845648?text=${encodeURIComponent(
      `Olá, gostaria de pedir essa(s) marmita(s):\n\n${message}\n\nTotal: R$${totalPrice.toFixed(
        2
      )}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const totalQuantity = quantities.reduce((acc, quantity) => acc + quantity, 0);

  const totalPrice = quantities.reduce(
    (acc, quantity, index) => acc + quantity * precos[index],
    0
  );

  return (
    <section id="marmitas" className="section-marmitas">
      <div className="container-sombra">
        <article className="article-marmitas">
          <h2>Marmitas da Semana 16/07 a 22/07</h2>
          <h3>Escolha e peça já suas marmitas</h3>
        </article>
        <div className="card-marmitas">
          {quantities.map((quantity, index) => (
            <div key={index} className="marmita">
              <p>{sabores[index]}</p>
              <p>Preço: R${precos[index].toFixed(2)}</p>
              <div className="responsive-button">
                <button
                  className="button-marmita"
                  onClick={() => handleDecrement(index)}
                >
                  <RiSubtractLine />
                </button>
                <span className="quantity">{quantity}</span>
                <button
                  className="button-marmita"
                  onClick={() => handleIncrement(index)}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">
          <p>Total de marmitas: {totalQuantity}</p>
          <p>Total a pagar: R${totalPrice.toFixed(2)}</p>
        </div>
        <button
          className="button-order"
          onClick={handleOrder}
          disabled={totalQuantity === 0}
        >
          Fazer Pedido <IoLogoWhatsapp />
        </button>
      </div>
    </section>
  );
}
