import { Footer } from "../Home/Components-home/Footer/Footer";
import { Parceiros } from "../Home/Components-home/Parceiros/Parceiros";
import { Link } from "react-router-dom";
import "./index.css";
import { Produtos } from "./Salgados-e-Doces/index";

export function SalgadosIndex() {
  return (
    <section className="index-salgados">
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
