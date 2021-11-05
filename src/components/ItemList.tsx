import React, { useEffect, useState } from "react";
import { getItems, Item } from "../services/items";
import { Container, Wrap } from "@chakra-ui/react";
import { ItemCard } from "./ItemCard";

export const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    getItems().then(setItems)
  }, []);

  return (
    <Container maxW="container.xl">
      <Wrap spacing="30px" justify="center">
        {items.map(item => <ItemCard item={item} key={item.id} />)}
      </Wrap>
    </Container>
  );
};
