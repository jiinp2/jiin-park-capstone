import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/focal-logo.svg";

function Navbar() {
  return (
    <header>
      <Link to="/" className="header">
        <img src={logo} alt="Logo" className="header__logo" />
        <h2>Focal</h2>
      </Link>
    </header>
  );
}

export default Navbar;
