import photo from "../../../../assets/about-photo.png";
import "./Sobre.css";

export function Sobre() {
  return (
    <section className="section-about">
      <article className="article-about">
        <h2>Sobre Nós</h2>
        <h3>Informação aqui</h3>
        <div className="about-texts">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            neque illum omnis magnam veritatis praesentium saepe quis
            voluptatibus qui. Amet error quisquam veniam consectetur veritatis
            possimus rerum porro eaque omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            ad itaque dicta iure. Dolorum architecto nobis, quo quidem aut
            labore placeat obcaecati saepe illo impedit voluptas, rem iure
            deserunt tenetur?
          </p>
        </div>
        <div className="about-button">
          <a href="" target="blank">
            Clique aqui para experimentar
          </a>
        </div>
      </article>
      <img src={photo} alt="" />
    </section>
  );
}
