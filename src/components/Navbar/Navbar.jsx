import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/focal-logo.svg";

function Navbar() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <h2>
        <Link to="/">Focal</Link>
      </h2>
    </header>
  );
}

export default Navbar;
