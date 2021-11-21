import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Shop } from "./components/Shop";
import { Cart } from "./components/Cart";
import { Nav } from "./components/Nav";
import { ItemPage } from "./components/Items/ItemPage";
import { Footer } from "./components/Footer";
import React, { useState } from "react";

const RouteSwitch = () => {
  const [cart, setCart] = useState([]);

  const addToCart = async (e) => {
    console.log(e.target.parentNode.id);
    let id = e.target.parentNode.parentNode.id;
    let url = "https://fakestoreapi.com/products/" + id;
    let response = await fetch(url);
    let item = await response.json();
    console.log(item);
    let itemId = item.id;
    let flag = 0;
    for (let item of cart) {
      if (item.itemId === itemId) {
        item.quantity++;
        flag = 1;
        break;
      }
    }
    if (flag === 0)
      setCart([
        ...cart,
        {
          itemId,
          quantity: 1,
        },
      ]);

    console.log(cart);
  };

  const removeItem = (e) => {
    let delId = Number(e.target.parentNode.parentNode.id);
    let newCart = cart.slice(0);
    let delIndex = -1;
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].itemId === delId) {
        delIndex = i;
        break;
      }
    }

    newCart = newCart.slice(0, delIndex).concat(newCart.slice(delIndex + 1));
    setCart([...newCart]);
  };

  const increaseQty = (e) => {
    let qtyId = Number(e.target.parentNode.parentNode.id);
    let newCart = cart.slice(0);
    let qtyIndex = -1;
    for (let i = 0; i < newCart.length; i++) {
      console.log(newCart[i].itemId, qtyId);
      if (newCart[i].itemId === qtyId) {
        qtyIndex = i;
        break;
      }
    }

    newCart[qtyIndex].quantity++;
    setCart([...newCart]);
  };

  const decreaseQty = (e) => {
    let qtyId = Number(e.target.parentNode.parentNode.id);
    let newCart = cart.slice(0);
    let qtyIndex = -1;
    for (let i = 0; i < newCart.length; i++) {
      console.log(newCart[i].itemId, qtyId);
      if (newCart[i].itemId === qtyId) {
        qtyIndex = i;
        break;
      }
    }
    if (newCart[qtyIndex].quantity === 1) return;
    newCart[qtyIndex].quantity--;
    setCart([...newCart]);
  };
  return (
    <BrowserRouter>
      <Nav cartLength={cart.length} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shopping-cart" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopping-cart/shop" element={<Shop />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartProp={cart}
              removeItem={removeItem}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          }
        />
        <Route
          path="/shopping-cart/cart"
          element={
            <Cart
              cartProp={cart}
              removeItem={removeItem}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          }
        />
        <Route path="/shop/:id" element={<ItemPage addToCart={addToCart} />} />
        <Route
          path="/shopping-cart/shop/:id"
          element={<ItemPage addToCart={addToCart} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
