import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiSubtractLine } from "react-icons/ri";
import "./Marmitas.css";

export function Marmitas() {
  const sabores = [
    "Marmita de Carne",
    "Marmita de Frango",
    "Marmita Vegetariana",
    "Marmita de Peixe",
    "Marmita Mista",
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
      .join(", ");

    const whatsappUrl = `https://wa.me/5561981774548?text=${encodeURIComponent(
      `Olá, gostaria de pedir essa(s) marmita(s) ${message}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const totalQuantity = quantities.reduce((acc, quantity) => acc + quantity, 0);

  return (
    <section className="section-marmitas">
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
            <span>{quantity}</span>
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
