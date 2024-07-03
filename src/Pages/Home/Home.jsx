import { Card } from "./Components-home/Card/Card";
import { Depoiments } from "./Components-home/Depoiments/Depoiments";
import { Footer } from "./Components-home/Footer/Footer";
import { Marmitas } from "./Components-home/Marmitas/Marmitas";
import { Menu } from "./Components-home/Menu/Menu";
import { Parceiros } from "./Components-home/Parceiros/Parceiros";
import { Pre } from "./Components-home/Pre-Menu/Pre";
import { Sobre } from "./Components-home/Sobre/Sobre";
import { Start } from "./Components-home/Start/Start";
import "./Home.css";

export function Home() {
  return (
    <main className="main-home">
      <Pre />
      <Menu />
      <Start />
      <Card />
      <Marmitas />
      <Sobre />
      <Parceiros />
      <Depoiments />
      <Footer />
    </main>
  );
}
