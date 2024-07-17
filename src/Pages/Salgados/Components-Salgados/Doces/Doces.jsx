import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { LuWheatOff } from "react-icons/lu";
import { LuMilkOff } from "react-icons/lu";
import { TbMilkOff } from "react-icons/tb";
import { TbCubeOff } from "react-icons/tb";
import { RiSubtractLine } from "react-icons/ri";
import mesclado from "../../../../assets/mesclado.png";
import coco from "../../../../assets/coco.png";
import cenoura from "../../../../assets/cenoura.png";
import muffin from "../../../../assets/muffin.png";
import chocolatudo from "../../../../assets/chocolatudo.png";
import banana from "../../../../assets/banana.png";

export function Doces() {
  const salgados = [
    {
      description: "Bolinho Mesclado de Cacau e Coco ",
      info: "Bolinho que combina o sabor do cacau e coco",
      Embalagem: "Unidade de 55g (individual)",
      Valor: "R$ 8,00",
      image: mesclado,
      icons: [<LuWheatOff />, <LuMilkOff />, <TbCubeOff />],
    },
    {
      description: "Bolinho de Cenoura",
      info: "Opção de cenoura com cobertura de chocolate ou opção mesclado com cacau (sem cobertura)",
      Embalagem: "Unidade de 55g (individual)",
      Valor: "R$ 7,00",
      image: cenoura,
      icons: [<LuWheatOff />, <TbMilkOff />],
    },
    {
      description: "Muffin de cacau",
      info: "Muffin feito com cacau 100%",
      Embalagem: "Unidade de 55g (individual)",
      Valor: "R$ 8,00",
      image: muffin,
      icons: [<LuWheatOff />, <TbMilkOff />, <TbCubeOff />],
    },
    {
      description: "Bolo Prestígio",
      info: "Base de bolo de chocolate, recheio de coco natural, cremoso e cobertura de chocolate",
      Embalagem: "Unidade de 400g e de 700g",
      Valor: "R$ 39,00 (400g) R$ 82,00 (700g)",
      image: coco,
      icons: [<LuWheatOff />, <TbMilkOff />],
    },
    {
      description: "Bolo Chocolatudo",
      info: "Bolo fofinho de chocolate com cobertura de chocolate cremoso",
      Embalagem: "Unidade de 400g e de 800g",
      Valor: "R$ 35,00 (400g) R$ 70,00 (700g)",
      image: chocolatudo,
      icons: [<LuWheatOff />, <TbMilkOff />, <TbCubeOff />],
    },
    {
      description: "Bolo de Banana e Tâmara",
      info: "Bolo fofinho de banana com cacau, adoçado naturalmente com tâmara",
      Embalagem: "Unidade de 400g",
      Valor: "R$ 32,00",
      image: banana,
      icons: [<LuWheatOff />, <LuMilkOff />, <TbCubeOff />],
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
      `Olá, gostaria de pedir esse(s) doce(s) fit:\n\n${message}`
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
          <h2>Doces Fit</h2>
          <h3>Escolha e peça já seus Doces fit</h3>
        </article>
        <div className="card-salgados">
          {salgados.map((salgado, index) => (
            <div key={index} className="doces">
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
                  <span className="icon" key={iconIndex}>
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
