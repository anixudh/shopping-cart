import { useEffect, useState } from "react";
import { Item } from "./Items/Item";
import "../styles/Shop.css";

export const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      setItems(await fetchItems());
    };

    loadItems();
  }, []);

  const fetchItems = async () => {
    let items = [];
    for (let i = 1; i <= 8; i++) {
      let response = await fetch("./products/" + i + ".json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      let item = await response.json();
      //console.log(item);
      let id = item.id;
      let title = item.title;
      let description = item.description;
      let price = item.price;
      let category = item.category;
      let image = item.image;
      items.push({
        id,
        title,
        description,
        price,
        category,
        image,
      });
    }
    for (let i = 15; i <= 20; i++) {
      let response = await fetch("./products/" + i + ".json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      let item = await response.json();
      //console.log(item);
      let id = item.id;
      let title = item.title;
      let description = item.description;
      let price = item.price;
      let category = item.category;
      let image = item.image;
      items.push({
        id,
        title,
        description,
        price,
        category,
        image,
      });
    }
    return items;
  };

  return (
    <div className="shop">
      {items.length === 0 ? (
        <div>Loading...</div>
      ) : (
        items.map((item) => {
          return <Item key={item.id} item={item} />;
        })
      )}
    </div>
  );
};
