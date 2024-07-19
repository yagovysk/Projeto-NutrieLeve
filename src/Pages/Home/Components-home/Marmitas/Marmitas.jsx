import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiSubtractLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import "./Marmitas.css";

export function Marmitas() {
  const sabores = [
    "I -  Quibe de patinho com quinoa recheado com ricota , abóbora e vagem passados no azeite e alho. 350g",
    "II - Iscas de frango aceboladas , penne de espinafre sem glúten com molho de queijo, cenoura em rodelas com gergelim. 350g",
    "III - Mexido à mineira. Feito com filé suíno, linguiça de frango, arroz integral, feijão vermelho e couve. 350g",
    "IV - Cubos de carne ao molho com chimichurre, arroz sete grãos, brócolis no vapor. 350g",
    "V - Filé de frango a rolê recheado com tirinha de pimentão, cenoura e bacon, purê de batata, mix de legumes (abobrinha, milho, couve-flor). 350g",
  ];

  const precos = [21.0, 21.0, 21.0, 21.0, 21.0];

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
