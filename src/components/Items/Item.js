import "../../styles/Item.css";
import { Link } from "react-router-dom";
export const Item = ({ item }) => {
  //console.log(item.item.image);
  return (
    <div className="item" id={item.id}>
      <Link to={`/shopping-cart/shop/${item.id}`}>
        <img src={item.image} className="item-image" alt="item" />
        <hr />

        <div className="item-name">{item.title}</div>
        <hr />

        <div className="item-price">${item.price}</div>
      </Link>
    </div>
  );
};
