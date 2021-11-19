export const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div className="cart">
      <h1>This is Cart</h1>
      {cart.length === 0 ? (
        <div>Cart is empty!</div>
      ) : (
        cart.map((item) => {
          return (
            <div key={item.id} className="cart-item">
              <div className="cart-item-title">{item.title}</div>
            </div>
          );
        })
      )}
    </div>
  );
};
