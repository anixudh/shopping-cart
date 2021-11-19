import { Link } from "react-router-dom";
import "../styles/Nav.css";
export const Nav = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <div className="nav-link">Home</div>
      </Link>
      <Link to="/shop">
        <div className="nav-link">Shop</div>
      </Link>
      <Link to="/cart">
        <div className="nav-link">Cart</div>
      </Link>
    </nav>
  );
};
