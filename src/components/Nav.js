import { Link } from "react-router-dom";
import "../styles/Nav.css";
export const Nav = ({ cartLength }) => {
  return (
    <nav className="nav-bar">
      <Link to="/shopping-cart">
        <div className="nav-link">Home</div>
      </Link>
      <Link to="/shopping-cart/shop">
        <div className="nav-link">Shop</div>
      </Link>
      <Link to="/shopping-cart/cart">
        <div className="nav-link nav-cart">
          Cart
          {cartLength === 0 ? (
            <div></div>
          ) : (
            <div className="cart-length">{cartLength}</div>
          )}
        </div>
      </Link>
    </nav>
  );
};
