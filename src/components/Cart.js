import { useState } from "react";
import { useEffect } from "react";
import "../styles/Cart.css";

export const Cart = ({ cartProp, removeItem, increaseQty, decreaseQty }) => {
  const [cart, setCart] = useState([...cartProp]);

  useEffect(() => {
    const loadItems = async () => {
      setCart(await fetchDetails());
    };

    const fetchDetails = async () => {
      let cart = [];
      for (let i = 0; i < cartProp.length; i++) {
        let url = "./products/" + cartProp[i].itemId + ".json";
        let response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        let item = await response.json();
        let id = item.id;
        let img = item.image;
        let title = item.title;
        let price = item.price;
        let quantity = cartProp[i].quantity;
        //console.log(id, img, title);
        cart.push({
          id,
          img,
          title,
          quantity,
          price,
        });
      }
      return cart;
    };

    loadItems();
  }, [cartProp]);

  const calcTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }
    return total;
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <div>Cart is empty!</div>
      ) : (
        cart.map((item) => {
          return (
            <div key={item.id} id={item.id} className="cart-item">
              <div className="cart-item-details">
                <img className="cart-item-img" alt="cart-item" src={item.img} />
                <div className="cart-item-title">{item.title}</div>
                <div className="cart-item-price">${item.price}</div>
              </div>

              <div className="cart-buttons">
                <button className="inc-qty" onClick={increaseQty}>
                  +
                </button>
                <div>Quantity: {item.quantity}</div>
                <button className="inc-qty" onClick={decreaseQty}>
                  -
                </button>
                <button
                  className="remove-cart-item btn btn-danger"
                  onClick={removeItem}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })
      )}
      <div className="total">Total= ${calcTotal()}</div>
      <div className="checkout">checkout</div>
    </div>
  );
};
