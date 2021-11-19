import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../../styles/ItemPage.css";
export const ItemPage = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchItem = async () => {
      let url = "https://fakestoreapi.com/products/" + id;
      let response = await fetch(url);
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
        <div className="item-details">
          <img className="item-page-image" src={item.image} alt="item-page" />
          <div className="item-page-name">{item.title}</div>
        </div>
      )}
    </div>
  );
};
