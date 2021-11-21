import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../../styles/ItemPage.css";

export const ItemPage = ({ addToCart }) => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchItem = async () => {
      //console.log(id);
      let url = "../products/" + id + ".json";
      let response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      let item = await response.json();

      setItem(item);
    };
    const loadItem = () => {
      fetchItem();
    };

    loadItem();
  }, []);

  return (
    <div className="item-page">
      {Object.keys(item).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="item-details" id={id}>
          <div className="item-page-left">
            <img className="item-page-image" src={item.image} alt="item-page" />
            <div className="item-page-name">{item.title}</div>
          </div>
          <div className="item-page-right">
            <div className="item-page-category">Category: {item.category}</div>{" "}
            <hr />
            <div className="item-page-description">
              Description: {item.description}
              <hr />
            </div>
            <div className="item-page-price">Price: ${item.price}</div>
            <div className="add-to-cart-button" onClick={addToCart}>
              Add to cart
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
