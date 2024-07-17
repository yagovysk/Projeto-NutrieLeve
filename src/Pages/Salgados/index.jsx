import { Footer } from "../Home/Components-home/Footer/Footer";
import { Parceiros } from "../Home/Components-home/Parceiros/Parceiros";
import { Doces } from "./Components-Salgados/Doces/Doces";
import { Salgados } from "./Components-Salgados/Salgados-component/Salgados";
import { Link } from "react-router-dom";
import "./index.css";

export function SalgadosIndex() {
  return (
    <section className="index-salgados">
      <Link className="voltar-salgados" to="/">
        Voltar
      </Link>
      <div className="container-salgadosEdoces">
        <Salgados />
        <Doces />
      </div>
      <Parceiros />
      <Footer />
    </section>
  );
}
