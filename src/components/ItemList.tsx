import React, { useEffect, useState } from "react";
import { getItems, Item } from "../services/items";

export const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    getItems().then(setItems)
  }, []);

  return (
    <ul>
      {items.map(item => <li>{item.name}</li>)}
    </ul>
  );
};
