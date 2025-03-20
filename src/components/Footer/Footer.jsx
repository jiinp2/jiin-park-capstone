import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo-v2.svg";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer__logo-wrapper">
        <img src={logo} alt="logo" />
        <h2 className="logo-text">Focal</h2>
      </Link>
      <div className="footer__info-wrapper">
        <p>Built by Jiin</p>
        <p>Github: https://github.com/jiinp2</p>
        <p>Portfolio: https://www.jiinpark.ca/</p>
      </div>
    </footer>
  );
}

export default Footer;
