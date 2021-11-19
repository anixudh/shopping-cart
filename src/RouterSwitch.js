import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Shop } from "./components/Shop";
import { Cart } from "./components/Cart";
import { Nav } from "./components/Nav";
import { ItemPage } from "./components/Items/ItemPage";
import React from "react";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop/:id" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
