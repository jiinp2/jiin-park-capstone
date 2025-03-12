import "./Hero.scss";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>Capture Your Travels</h1>
      <p>Transform memories into interactive journeys.</p>
      <button className="hero__button" onClick={() => navigate("/upload")}>
        Get Started
      </button>
    </section>
  );
}

export default Hero;
