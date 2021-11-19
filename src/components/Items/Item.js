import "../../styles/Item.css";
import { Link } from "react-router-dom";
export const Item = ({ item }) => {
  //console.log(item.item.image);
  return (
    <Link to={`/shop/${item.id}`}>
      <div className="item" id={item.id}>
        <img src={item.image} className="item-image" alt="item" />
      </div>
    </Link>
  );
};
