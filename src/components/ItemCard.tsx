import React from "react";
import { Heading, List, ListItem, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Item, Variant } from "../services/items";
import { Card } from "./Card";

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
    <Card w="240px" h="240px">
      <Heading as="h5" size="sm">{item.name}</Heading>
      <Variants variants={item.variants} />
      <Button mt="auto" alignSelf="center" as={Link} to={`/items/${item.id}`}>
        SELECT
      </Button>
    </Card>
  );
};
