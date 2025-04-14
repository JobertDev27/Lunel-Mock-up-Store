import Header from "./components/Header/Header";
import "./style/main.css";

export default function Home() {
  return (
    <main>
      <Header />
      <section id="landing-page-bg"></section>
      <section id="landing-page">
        <p className="qoute-text">"Effortless. Elevated. Lunel."</p>
      </section>
      <section>
        <p>test</p>
      </section>
    </main>
  );
}
