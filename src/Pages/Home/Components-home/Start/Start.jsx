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
        <title>Nutri e Leve - Marmitas Fitness congeladas</title>
        <meta
          name="description"
          content="Marmitas saudáveis, com sabores inegualáveis, a cada semana temos sabores diferentes, venham experimentar as melhores marmitas fit de Brasília."
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
            alt="fundo com duas marmitas fit uma sendo segurada na esquerda e a mesma na direita"
          />
          <article className="container-article">
            <p>Comida boa todo dia</p>
          </article>
        </div>

        <div className="container-content">
          <img loading="lazy" src={fundo2} alt="Imagem 2" />
          <article className="container-article">
            <p>Os melhores salgados fit</p>
          </article>
        </div>

        <div className="container-content">
          <img loading="lazy" src={fundo3} alt="Imagem 3" />
          <article className="container-article">
            <p>Os melhores doces fit</p>
          </article>
        </div>
      </Carousel>
    </section>
  );
}
