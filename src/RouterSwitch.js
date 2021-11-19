import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Shop } from "./components/Shop";
import { Cart } from "./components/Cart";
import { Nav } from "./components/Nav";
import { ItemPage } from "./components/Items/ItemPage";
import React, { useEffect, useState } from "react";

const RouteSwitch = () => {
  const [cart, setCart] = useState([]);

  const addToCart = async (e) => {
    console.log(e.target.parentNode.id);
    let id = e.target.parentNode.id;
    let url = "https://fakestoreapi.com/products/" + id;
    let response = await fetch(url);
    let item = await response.json();
    console.log(item);
    setCart([...cart, item]);
  };
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/shop/:id" element={<ItemPage addToCart={addToCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
