import { Footer } from "../Home/Components-home/Footer/Footer";
import { Parceiros } from "../Home/Components-home/Parceiros/Parceiros";
import { Doces } from "./Components-Salgados/Doces/Doces";
import { Salgados } from "./Components-Salgados/Salgados-component/Salgados";

import "./index.css";

export function SalgadosIndex() {
  return (
    <section className="index-salgados">
      <Salgados />
      <Doces />
      <Parceiros />
      <Footer />
    </section>
  );
}
