import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { RiSubtractLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import "./Marmitas.css";

export function Marmitas() {
  const sabores = [
    "I - Pernil à mineira, farofa de banana da terra e couve com alho. 350g",
    "II - Brasileirinho de carne. Patinho moído com cenoura ralada, arroz branco , feijão preto. 350g",
    "III - Filé de frango a parmegiana (empanado com aveia sem glúten) e purê de batata. 350g",
    "IV - Bife a rolê, quibebe de mandioca, mix de grão de bico com abobrinha com azeite e alho. 350g",
    "V - Tirinhas de frango à oriental, arroz integral com brócolis. 350g",
    "VI - Moqueca de tilápia, arroz de coco, brócolis no vapor. 350g",
    "VII - Tilápia grelhada, legumes assados, purê de batata. 350g",
    "VIII - Tilápia com banana da terra gratinada com molho branco, arroz integral, seleta de legumes. 350g",
  ];

  const caldos = [
    "Sopa de feijão com patinho moído. 250g",
    "Sopa de legumes com frango desfiado. 250g",
    "Canjiquinha com lombo de porco desfiado. 250g",
  ];

  const precos = [21.0, 21.0, 21.0, 21.0, 21.0, 26.0, 26.0, 26.0];
  const precosCaldos = [13.0, 13.0, 13.0];

  const [quantities, setQuantities] = useState(Array(sabores.length).fill(0));
  const [quantitiesCaldos, setQuantitiesCaldos] = useState(
    Array(caldos.length).fill(0)
  );
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calcularTotal = () => {
      const totalMarmitas = quantities.reduce(
        (acc, quantity, index) => acc + quantity * precos[index],
        0
      );
      const totalCaldos = quantitiesCaldos.reduce(
        (acc, quantity, index) => acc + quantity * precosCaldos[index],
        0
      );
      setTotalPrice(totalMarmitas + totalCaldos);
    };

    calcularTotal();
  }, [quantities, quantitiesCaldos]);

  const handleIncrement = (index, type = "marmitas") => {
    const updateQuantities =
      type === "marmitas" ? [...quantities] : [...quantitiesCaldos];
    updateQuantities[index] += 1;
    type === "marmitas"
      ? setQuantities(updateQuantities)
      : setQuantitiesCaldos(updateQuantities);
  };

  const handleDecrement = (index, type = "marmitas") => {
    const updateQuantities =
      type === "marmitas" ? [...quantities] : [...quantitiesCaldos];
    if (updateQuantities[index] > 0) {
      updateQuantities[index] -= 1;
      type === "marmitas"
        ? setQuantities(updateQuantities)
        : setQuantitiesCaldos(updateQuantities);
    }
  };

  const handleOrder = () => {
    const messageMarmitas = quantities
      .map((quantity, index) => {
        if (quantity > 0) {
          return `${sabores[index]}: ${quantity} unidade(s)`;
        }
        return null;
      })
      .filter(Boolean)
      .join("\n");

    const messageCaldos = quantitiesCaldos
      .map((quantity, index) => {
        if (quantity > 0) {
          return `${caldos[index]}: ${quantity} unidade(s)`;
        }
        return null;
      })
      .filter(Boolean)
      .join("\n");

    const marmitasMessage = quantities.every((quantity) => quantity === 0)
      ? "Marmita não foi selecionada"
      : `Marmitas:\n${messageMarmitas}`;

    const caldosMessage = quantitiesCaldos.every((quantity) => quantity === 0)
      ? "Caldo não foi selecionado"
      : `Caldos:\n${messageCaldos}`;

    const whatsappUrl = `https://wa.me/556199845648?text=${encodeURIComponent(
      `Olá, gostaria de pedir:\n\n${marmitasMessage}\n\n${caldosMessage}\n\nTotal a pagar: R$${totalPrice.toFixed(
        2
      )}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const totalQuantity = quantities.reduce((acc, quantity) => acc + quantity, 0);
  const totalCaldosQuantity = quantitiesCaldos.reduce(
    (acc, quantity) => acc + quantity,
    0
  );

  return (
    <section id="marmitas" className="section-marmitas">
      <div className="container-sombra">
        <article className="article-marmitas">
          <h1>Marmitas da Semana 03/12 a 09/12</h1>
          <h2>Escolha e peça já suas marmitas</h2>
        </article>
        <div className="card-marmitas">
          {quantities.map((quantity, index) => (
            <div key={index} className="marmita">
              <p>{sabores[index]}</p>
              <p>Preço: R${precos[index].toFixed(2)}</p>
              <div className="responsive-button">
                <button
                  className="button-marmita"
                  onClick={() => handleDecrement(index, "marmitas")}
                >
                  <RiSubtractLine />
                </button>
                <span className="quantity">{quantity}</span>
                <button
                  className="button-marmita"
                  onClick={() => handleIncrement(index, "marmitas")}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          ))}
        </div>
        <h3 className="title-caldos">Caldos</h3>
        <div className="card-marmitas">
          {quantitiesCaldos.map((quantity, index) => (
            <div key={index} className="marmita">
              <p>{caldos[index]}</p>
              <p>Preço: R${precosCaldos[index].toFixed(2)}</p>
              <div className="responsive-button">
                <button
                  className="button-marmita"
                  onClick={() => handleDecrement(index, "caldos")}
                >
                  <RiSubtractLine />
                </button>
                <span className="quantity">{quantity}</span>
                <button
                  className="button-marmita"
                  onClick={() => handleIncrement(index, "caldos")}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">
          <p>Total de marmitas: {totalQuantity}</p>
          <p>Total de caldos: {totalCaldosQuantity}</p>
          <p>Total a pagar: R${totalPrice.toFixed(2)}</p>
        </div>
        <button
          className="button-order"
          onClick={handleOrder}
          disabled={totalQuantity + totalCaldosQuantity === 0}
        >
          Fazer Pedido <IoLogoWhatsapp />
        </button>
      </div>
    </section>
  );
}
