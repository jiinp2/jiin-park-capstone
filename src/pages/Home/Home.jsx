import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Guide from "../../components/Guide/Guide";

function Home() {
  return (
    <section className="content-wrapper">
      <Hero />
      <Guide />
    </section>
  );
}

export default Home;
