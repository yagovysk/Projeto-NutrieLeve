import { Footer } from "../Home/Components-home/Footer/Footer";
import { Parceiros } from "../Home/Components-home/Parceiros/Parceiros";
import { Link } from "react-router-dom";
import "./index.css";
import { Produtos } from "./Salgados-e-Doces/index";
import { Helmet } from "react-helmet";

export function SalgadosIndex() {
  return (
    <section className="index-salgados">
      <Helmet>
        <title>Salgados fitness | Doces fitness</title>
        <meta
          name="description"
          content="Experimente nossos mais deliciosos salgados, coxinhas fitness, bolinho maromba com queijo e muito mais. Temos também doces fitness sem glúten e sem lactose, não perca a oportunidade de provar."
        />
        <meta
          name="google-site-verification"
          content="Own4TXjLIoTk1lCvTOUdwzAZwN9-mtabezxoEZP66fo"
        />
      </Helmet>
      <Link className="voltar-salgados" to="/">
        Voltar
      </Link>
      <div className="container-salgadosEdoces">
        <Produtos />
      </div>
      <Parceiros />
      <Footer />
    </section>
  );
}
