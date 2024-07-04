import photo from "../../../../assets/about-photo.png";
import "./Sobre.css";

export function Sobre() {
  return (
    <section id="about" className="section-about">
      <article className="article-about">
        <h2>Sobre Nós</h2>
        <h3>Conheça nossa história</h3>
        <div className="about-texts">
          <div className="scrollable-text">
            <p>
              Após anos dedicados à nutrição, chegou o momento da aposentadoria.
              No entanto, ficar em casa não era o que eu queria. Com toda a
              minha experiência como nutricionista, comecei a explorar novas
              possibilidades. Na época, o dadinho de tapioca estava em alta, e
              comecei a prepará-lo para a família. O sucesso foi imediato, todos
              elogiavam e pediam mais. Percebi aí uma oportunidade para vender o
              produto, inicialmente para amigos.
            </p>
            <p>
              Logo pensei em criar uma versão mais saudável do pão de queijo.
              Pesquisei sobre lanches saudáveis e descobri a coxinha protéica
              sem glúten e sem lactose. Foi nesse momento que decidi seguir
              trabalhando com lanches saudáveis. As oportunidades começaram a
              surgir e fiz parceria com outra nutricionista, que trouxe ideias
              inovadoras, dando origem à Nutri e Leve.
            </p>
            <p>
              Nossa empresa se destacou ao oferecer opções deliciosas que
              atendem a diversas restrições alimentares, como bolos sem glúten e
              sem lactose. Meus filhos sempre me encorajaram, relatando a
              dificuldade que eles e os amigos tinham em encontrar produtos
              gostosos, saudáveis e acessíveis. Meu marido também dizia que era
              difícil encontrar produtos como os nossos.
            </p>
            <p>
              Com o tempo, percebi que poderíamos expandir nosso leque de
              produtos, incluindo marmitas saudáveis. Novamente, a família e os
              amigos foram os primeiros consumidores, e o feedback foi
              excelente. Essa expansão reforçou nosso compromisso em oferecer
              soluções alimentares que contribuem para o bem-estar e a saúde dos
              nossos clientes.
            </p>
            <p>
              Nossos produtos não são apenas uma opção, mas uma ferramenta para
              transformar hábitos e vidas. Obrigado por fazer parte dessa
              jornada conosco.
            </p>
          </div>
        </div>
        <div className="about-button">
          <a href="" target="blank">
            Clique aqui para experimentar
          </a>
        </div>
      </article>
      <img src={photo} alt="Sobre nós" />
    </section>
  );
}
