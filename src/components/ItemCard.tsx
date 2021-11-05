import React from "react";
import { WrapItem, Heading, List, ListItem, Button } from "@chakra-ui/react";
import { Item } from "../services/items";

export interface ItemCardProps {
  item: Item;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <WrapItem w="240px" h="240px" borderWidth="1px" borderRadius="lg" overflow="hidden" flexDirection="column">
      <Heading as="h5" size="sm">{item.name}</Heading>
      <List>
        {item.variants.map((variant, i) =>
          <ListItem key={variant.id}>
            Item {i + 1} - {variant.name}
          </ListItem>)}
      </List>
      <Button mt="auto" alignSelf="center">SELECT</Button>
    </WrapItem>
  );
};
