import { useEffect, useState } from "react";
import { Item } from "./Items/Item";

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
      let url = "https://fakestoreapi.com/products/" + i;
      let response = await fetch(url);
      let item = await response.json();
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
      let url = "https://fakestoreapi.com/products/" + i;
      let response = await fetch(url);
      let item = await response.json();
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

  /* const handleItemClick = (e) => {
    console.log(e.target.parentNode.id);
  }; */

  return (
    <div className="shop">
      <h1>This is shop</h1>
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
