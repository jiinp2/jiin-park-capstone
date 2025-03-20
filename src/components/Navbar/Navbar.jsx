import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo-v2.svg";

function Navbar() {
  return (
    <header>
      <Link to="/" className="header">
        <img src={logo} alt="logo" />
        <h2>Focal</h2>
      </Link>
    </header>
  );
}

export default Navbar;
