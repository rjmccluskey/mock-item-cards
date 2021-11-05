import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getItem, Item } from "../services/items";

export const ItemPage: React.FC = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Item>();
  useEffect(() => {
    if (id) {
      getItem(id).then(setItem);
    }
  }, [id]);

  return (
    <>
      {item && <p>{item.name}</p>}
    </>
  );
};
