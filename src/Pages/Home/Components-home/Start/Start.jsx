import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import fundo from "../../../../assets/fundo1.webp";
import fundo2 from "../../../../assets/fundo2.png";
import fundo3 from "../../../../assets/fundo3.png";
import { Helmet } from "react-helmet";
import "./Start.css";

export function Start() {
  return (
    <section className="section-start">
      <Helmet>
        <title>Marmitas fitness congeladas | Nutri e leve Vicente Pires</title>
        <meta
          name="description"
          content="Marmitas saudáveis, fitness, com sabores inegualáveis, a cada semana temos sabores diferentes, venham experimentar as melhores marmitas fit de Brasília em Vicente Pires."
        />
        <meta
          name="google-site-verification"
          content="Own4TXjLIoTk1lCvTOUdwzAZwN9-mtabezxoEZP66fo"
        />
      </Helmet>
      <Carousel
        className="carousel"
        autoPlay
        interval={6000}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="arrow-button-left"
            >
              <MdArrowBackIosNew
                className="icon-arrow-left"
                icon={MdArrowBackIosNew}
              />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="arrow-button-right"
            >
              <MdOutlineArrowForwardIos
                className="Icon-arrow-right"
                icon={MdOutlineArrowForwardIos}
              />
            </button>
          )
        }
      >
        <div className="container-content">
          <img
            loading="lazy"
            src={fundo}
            alt="fundo com duas marmitas fitness uma sendo segurada na esquerda e a mesma na direita"
          />
          <div className="responsive-start">
            <div className="container-article">
              <article className="marmita-article">
                <h1>Estamos com um novo site para pedidos</h1>
                <a
                  href="https://www.prefirodelivery.com/nutrielevebsb
"
                  target="blank"
                >
                  Clique aqui e faça já seu pedido!
                </a>
              </article>
            </div>
          </div>
        </div>

        <div className="container-content">
          <img loading="lazy" src={fundo2} alt="Imagem 2" />
          <div className="responsive-start">
            <div className="container-article">
              <article className="marmita-article">
                <h1>Os melhores salgados fit</h1>
                <a
                  href="https://www.prefirodelivery.com/nutrielevebsb
"
                  target="blank"
                >
                  Clique aqui e faça já seu pedido!
                </a>
              </article>
            </div>
          </div>
        </div>

        <div className="container-content">
          <img loading="lazy" src={fundo3} alt="Imagem 3" />
          <div className="responsive-start">
            <div className="container-article">
              <article className="marmita-article">
                <h1>Os melhores doces fit</h1>
                <a
                  href="https://www.prefirodelivery.com/nutrielevebsb
"
                  target="blank"
                >
                  Clique aqui e faça já seu pedido!
                </a>
              </article>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
