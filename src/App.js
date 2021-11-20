import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1 className="home-shop-name">ANI.</h1>
      <Link to="/shop">
        <div className="home-goto-shop">Shop now!</div>
      </Link>
    </div>
  );
}

export default App;
