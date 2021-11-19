import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/shop">
        <li>Shop</li>
      </Link>
      <Link to="/cart">
        <li>Cart</li>
      </Link>
    </nav>
  );
};
