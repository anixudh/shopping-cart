//import { useState } from "react";

export const Cart = ({ cart, removeItem, increaseQty, decreaseQty }) => {
  //const [cart, setCart] = useState([...cartProp]);

  const fetchDetails = async (itemId) => {
    let url = "https://fakestoreapi.com/products/" + itemId;
    let response = await fetch(url);
    let item = await response.json();
    return item;
  };
  const loadDetails = (itemId) => {
    let imgSrc = "";
    let item = fetchDetails(itemId)
      .then((item) => {
        this.imgSrc = item.image;
      })
      .bind(this);

    return (
      <div className="item-details">
        <img className="cart-item-img" alt="cart-item" src={imgSrc} />
      </div>
    );
  };
  return (
    <div className="cart">
      <h1>This is Cart</h1>
      {cart.length === 0 ? (
        <div>Cart is empty!</div>
      ) : (
        cart.map((item) => {
          return (
            <div key={item.itemId} id={item.itemId} className="cart-item">
              {loadDetails(item.itemId)}
              <button className="inc-qty" onClick={increaseQty}>
                +
              </button>
              <div>Quantity: {item.quantity}</div>
              <button className="inc-qty" onClick={decreaseQty}>
                -
              </button>
              <button className="remove-cart-item" onClick={removeItem}>
                Remove
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};
