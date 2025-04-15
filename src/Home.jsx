import Header from "./components/Header/Header";
import ShopBtn from "./components/ShopBtn/ShopBtn";
import "./style/main.css";

export default function Home() {
  return (
    <main>
      <Header />
      <section id="landing-page-bg"></section>
      <section id="landing-page">
        <p className="qoute-text">"Effortless. Elevated. Lunel."</p>
        <ShopBtn />
      </section>
      <section>
        <p>test</p>
      </section>
    </main>
  );
}
