import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiSubtractLine } from "react-icons/ri";
import { LuWheatOff, LuMilkOff } from "react-icons/lu";
import { TbMilkOff, TbCubeOff } from "react-icons/tb";
import coxinha from "../../../assets/coxinha.png";
import maromba from "../../../assets/maromba.png";
import empada from "../../../assets/empada.png";
import coco from "../../../assets/coco.png";
import cenoura from "../../../assets/cenoura.png";
import muffin from "../../../assets/muffin.png";
import chocolatudo from "../../../assets/chocolatudo.png";
import banana from "../../../assets/banana.png";
import "./Produtos.css";

// Função para formatar valores como moeda brasileira
const formatCurrency = (value) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

// Componente para Ícones de dietas especiais
const DietIcons = () => (
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
);

// Componente Reutilizável para Card de Produto
const ProductCard = ({ product, quantity, onIncrement, onDecrement }) => (
  <div className="produto-card">
    <img
      src={product.image}
      alt={product.description}
      className="produto-image"
    />
    <p className="produto-descricao">{product.description}</p>
    <p className="produto-info">{product.info}</p>
    <p className="produto-embalagem">{product.Embalagem}</p>
    <span className="produto-valor">{formatCurrency(product.Valor)}</span>{" "}
    {/* Formatação de moeda */}
    <div className="produto-icons">
      {product.icons.map((icon, index) => (
        <span className="icon-produto" key={index}>
          {icon}
        </span>
      ))}
    </div>
    <div className="buttons-produto">
      <button
        className="button-produto"
        onClick={onDecrement}
        disabled={quantity === 0} // Desativa o botão se a quantidade for 0
      >
        <RiSubtractLine />
      </button>
      <span className="quantity-produto">{quantity}</span>
      <button className="button-produto" onClick={onIncrement}>
        <FaPlus />
      </button>
    </div>
  </div>
);

export function Produtos() {
  const produtos = {
    salgados: [
      {
        id: "coxinha",
        description: "Coxinha Proteica",
        info: "Salgado feito com frango e mandioca com recheio de frango.",
        Embalagem: "Embalagem de 500g (média de 10 unidades)",
        Valor: 41.0,
        image: coxinha,
        icons: [<LuWheatOff />, <LuMilkOff />],
      },
      {
        id: "maromba",
        description: "Salgado Maromba",
        info: "Salgado feito de batata doce e frango com recheio de queijo muçarela",
        Embalagem: "Embalagem de 500g (média de 10 unidades)",
        Valor: 41.0,
        image: maromba,
        icons: [<LuWheatOff />, <LuMilkOff />],
      },
      {
        id: "empada",
        description: "Empada Fit",
        info: "Empada com recheio de frango, alho poró, palmito e tomate confit",
        Embalagem: "Embalagem de 400g (média de 8 unidades)",
        Valor: 42.0,
        image: empada,
        icons: [<LuWheatOff />, <LuMilkOff />],
      },
    ],
    doces: [
      {
        id: "cenoura",
        description: "Bolinho de Cenoura",
        info: "Opção de cenoura com cobertura de chocolate ou opção mesclado com cacau (sem cobertura)",
        Embalagem: "Unidade de 55g (individual)",
        Valor: 7.0,
        image: cenoura,
        icons: [<LuWheatOff />, <TbMilkOff />],
      },
      {
        id: "muffin",
        description: "Muffin de Cacau",
        info: "Muffin feito com cacau 100%",
        Embalagem: "Unidade de 55g (individual)",
        Valor: 8.0,
        image: muffin,
        icons: [<LuWheatOff />, <TbMilkOff />, <TbCubeOff />],
      },
      {
        id: "prestigio-400g",
        description: "Bolo Prestígio 400g",
        info: "Base de bolo de chocolate, recheio de coco natural, cremoso e cobertura de chocolate",
        Embalagem: "Unidade de 400g",
        Valor: 39.0,
        image: coco,
        icons: [<LuWheatOff />, <TbMilkOff />],
      },
      {
        id: "prestigio-700g",
        description: "Bolo Prestígio 700g",
        info: "Base de bolo de chocolate, recheio de coco natural, cremoso e cobertura de chocolate",
        Embalagem: "Unidade de 700g",
        Valor: 82.0,
        image: coco,
        icons: [<LuWheatOff />, <TbMilkOff />],
      },
      {
        id: "chocolatudo-400g",
        description: "Bolo Chocolatudo 400g",
        info: "Bolo fofinho de chocolate com cobertura de chocolate cremoso",
        Embalagem: "Unidade de 400g",
        Valor: 35.0,
        image: chocolatudo,
        icons: [<LuWheatOff />, <TbMilkOff />, <TbCubeOff />],
      },
      {
        id: "chocolatudo-800g",
        description: "Bolo Chocolatudo 800g",
        info: "Bolo fofinho de chocolate com cobertura de chocolate cremoso",
        Embalagem: "Unidade de 800g",
        Valor: 70.0,
        image: chocolatudo,
        icons: [<LuWheatOff />, <TbMilkOff />, <TbCubeOff />],
      },
      {
        id: "banana",
        description: "Bolo de Banana e Tâmara",
        info: "Bolo fofinho de banana com cacau, adoçado naturalmente com tâmara",
        Embalagem: "Unidade de 400g",
        Valor: 32.0,
        image: banana,
        icons: [<LuWheatOff />, <LuMilkOff />, <TbCubeOff />],
      },
    ],
  };

  // Inicializa o estado para todas as quantidades de produtos
  const initialQuantities = {};
  Object.keys(produtos).forEach((categoria) => {
    produtos[categoria].forEach((produto) => {
      initialQuantities[produto.id] = 0;
    });
  });

  const [quantities, setQuantities] = useState(initialQuantities);

  const handleIncrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  // Função auxiliar para calcular o total sem duplicação
  const selectedTotal = () => {
    let total = 0;
    Object.keys(quantities).forEach((id) => {
      const quantity = quantities[id];
      if (quantity > 0) {
        let produto;
        for (let categoria of Object.keys(produtos)) {
          produto = produtos[categoria].find((p) => p.id === id);
          if (produto) break;
        }
        if (produto) {
          total += produto.Valor * quantity;
        }
      }
    });
    return total;
  };

  const handleOrder = () => {
    const selectedProducts = [];

    Object.keys(quantities).forEach((id) => {
      const quantity = quantities[id];
      if (quantity > 0) {
        // Encontrar o produto pelo ID
        let produto;
        for (let categoria of Object.keys(produtos)) {
          produto = produtos[categoria].find((p) => p.id === id);
          if (produto) break;
        }
        if (produto) {
          selectedProducts.push(
            `${produto.description}: ${quantity} x ${formatCurrency(
              produto.Valor
            )} = ${formatCurrency(produto.Valor * quantity)}`
          );
        }
      }
    });

    if (selectedProducts.length === 0) return;

    const total = selectedTotal();

    const message = `${selectedProducts.join("\n")}\n\nTotal: ${formatCurrency(
      total
    )}`;

    const whatsappUrl = `https://wa.me/556199845648?text=${encodeURIComponent(
      `Olá, gostaria de fazer o seguinte pedido:\n\n${message}`
    )}`;
    window.open(whatsappUrl, "_blank");

    // Opcional: Exibir uma mensagem de confirmação
    alert("Pedido enviado com sucesso! Em breve entraremos em contato.");
  };

  const totalQuantity = Object.values(quantities).reduce(
    (acc, qty) => acc + qty,
    0
  );

  return (
    <section className="section-produtos">
      <div className="container-sombra-produtos">
        <DietIcons />
        <article className="article-produtos">
          <h1>Salgados Fitness | Doces Fitness</h1>
          <h2>Escolha e peça já seus salgados e doces</h2>
        </article>
        <div className="cards-produtos">
          {Object.keys(produtos).map((categoria) => (
            <div key={categoria} className="categoria-produtos">
              <h3>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h3>
              <div className="cards">
                {produtos[categoria].map((produto) => (
                  <ProductCard
                    key={produto.id}
                    product={produto}
                    quantity={quantities[produto.id]}
                    onIncrement={() => handleIncrement(produto.id)}
                    onDecrement={() => handleDecrement(produto.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="pedir-produtos"
          onClick={handleOrder}
          disabled={totalQuantity === 0}
        >
          Fazer Pedido{" "}
          {totalQuantity > 0 && `- ${formatCurrency(selectedTotal())}`}
        </button>
      </div>
    </section>
  );
}
