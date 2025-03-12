import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h2>
        <Link to="/">Focal</Link>
      </h2>
    </header>
  );
}

export default Navbar;
