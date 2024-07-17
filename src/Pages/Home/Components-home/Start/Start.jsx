import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import fundo from "../../../../assets/fundo1.svg";
import fundo2 from "../../../../assets/fundo2.png";
import fundo3 from "../../../../assets/fundo3.png";
import "./Start.css";

export function Start() {
  return (
    <section className="section-start">
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
          <img src={fundo} alt="Imagem 1" />
          <article className="container-article">
            <p>Comida boa todo dia</p>
          </article>
        </div>

        <div className="container-content">
          <img src={fundo2} alt="Imagem 1" />

          <article className="container-article">
            <p>Comida boa todo dia</p>
          </article>
        </div>

        <div className="container-content">
          <img src={fundo3} alt="Imagem 1" />
          <article className="container-article">
            <p>Comida boa todo dia</p>
          </article>
        </div>
      </Carousel>
    </section>
  );
}
