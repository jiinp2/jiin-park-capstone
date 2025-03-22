import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo-v2.svg";

function Navbar() {
  return (
    <header className="header">
      <Link to="/" className="header__logo-wrapper">
        <img src={logo} alt="logo" />
        <h2 className="logo-text">Focal</h2>
      </Link>
      <div className="header__links">
        <Link to="/logs" className="link">
          Explore
        </Link>
        <button className="button--secondary">Login</button>
      </div>
    </header>
  );
}

export default Navbar;
