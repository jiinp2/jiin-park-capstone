import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <Link to="/" className="header">
        <h2>Focal</h2>
      </Link>
    </header>
  );
}

export default Navbar;
