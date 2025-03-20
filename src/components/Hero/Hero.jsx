import "./Hero.scss";
import { useNavigate } from "react-router-dom";
import { Icons } from "../../icons";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>Capture Your Travels</h1>
      <p>Transform memories into interactive journeys.</p>
      <button className="button--icon" onClick={() => navigate("/upload")}>
        Get Started
        <Icons.ArrowRight />
      </button>
    </section>
  );
}

export default Hero;
