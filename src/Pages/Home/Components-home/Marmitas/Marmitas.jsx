import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiSubtractLine } from "react-icons/ri";
import "./Marmitas.css";

export function Marmitas() {
  const sabores = [
    "I - Cubos de frango com grão de bico, ervilha fresca, pimentão colorido e cubinhos de queijo, arroz integral, cenoura em palito assada",
    "II - Quibe de forno de patinho com quinoa recheada com ricota e purê de abóbora",
    "III - Mexido à mineira. Feito com filé suíno, linguiça de frango, arroz, feijão vermelho, cenoura e couve",
    "IV - Filé de frango com tomate cereja e manjericão, creme de milho e seleta de legumes",
    "V - Escondidinho de carne de sol e mandioca",
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
      <article className="article-marmitas">
        <h2>Marmitas da Semana DD/MM a DD/MM</h2>
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
        Fazer Pedido
      </button>
    </section>
  );
}
