import React from "react";
import { WrapItem, Heading, List, ListItem, Button } from "@chakra-ui/react";
import { Item, Variant } from "../services/items";

const Variants: React.FC<{variants: Variant[]}> = ({ variants }) => {
  const firstFour = variants.slice(0, 4);
  const remainder = variants.length - firstFour.length;
  return (
    <List>
      {firstFour.map((variant, i) =>
        <ListItem key={variant.id}>
          Item {i + 1} - {variant.name}
        </ListItem>)}
      {remainder ? <ListItem>... plus {remainder} more</ListItem> : null}
    </List>
  );
}

export const ItemCard: React.FC<{item: Item}> = ({ item }) => {
  return (
    <WrapItem w="240px" h="240px" borderWidth="1px" borderRadius="lg" overflow="hidden" flexDirection="column">
      <Heading as="h5" size="sm">{item.name}</Heading>
      <Variants variants={item.variants} />
      <Button mt="auto" alignSelf="center">SELECT</Button>
    </WrapItem>
  );
};
