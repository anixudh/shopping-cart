import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1 className="home-shop-name">ANI.</h1>
      <Link to="/shopping-cart/shop">
        <div className="home-goto-shop">Shop now!</div>
      </Link>
    </div>
  );
}

export default App;
