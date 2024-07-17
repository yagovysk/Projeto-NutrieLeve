import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiSubtractLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import "./Marmitas.css";

export function Marmitas() {
  const sabores = [
    "I -  Kibe de patinho com quinoa recheado com ricota , abóbora e vagem passados no azeite e alho.",
    "II - Iscas de frango aceboladas , penne de espinafre sem glúten com molho de queijo, cenoura em rodelas com gergelim.",
    "III -Mexido à mineira . Feito com filé suíno, linguiça de frango, arroz integral , feijão vermelho e couve.",
    "IV - Cubos de carne ao molho com chimichurre, arroz 7 grãos, brócolis no vapor.",
    "V - Filé de frango a rolê  recheado com tirinha de pimentão , cenoura e bacon, purê de batata ,mix de legumes ( abobrinha, milho, couve, flor)",
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
          return `${sabores[index]}: ${quantity}`;
        }
        return null;
      })
      .filter(Boolean)
      .join("\n"); // Adiciona quebra de linha entre os itens

    const whatsappUrl = `https://wa.me/5561981774548?text=${encodeURIComponent(
      `Olá, gostaria de pedir essa(s) marmita(s):\n\n${message}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const totalQuantity = quantities.reduce((acc, quantity) => acc + quantity, 0);

  return (
    <section id="marmitas" className="section-marmitas">
      <div className="container-sombra">
        <article className="article-marmitas">
          <h2>Marmitas da Semana 15/07 a 19/07</h2>
          <h3>Escolha e peça já suas marmitas</h3>
        </article>
        <div className="card-marmitas">
          {quantities.map((quantity, index) => (
            <div key={index} className="marmita">
              <p>{sabores[index]}</p>
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
          ))}
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
