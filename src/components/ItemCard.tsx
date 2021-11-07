import React from "react";
import { Heading, List, ListItem, Button, ListItemProps } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Item, Variant } from "../services/items";
import { Card } from "./Card";

const StyledListItem: React.FC<ListItemProps> = ({ children, ...props }) => {
  return (
    <ListItem fontSize="sm" {...props}>
      {children}
    </ListItem>
  );
};

const Variants: React.FC<{variants: Variant[]}> = ({ variants }) => {
  const firstFour = variants.slice(0, 4);
  const remainder = variants.length - firstFour.length;
  return (
    <List w="100%">
      {firstFour.map((variant, i) =>
        <StyledListItem key={variant.id} isTruncated>
          Item {i + 1} - {variant.name}
        </StyledListItem>)}
      {remainder ? <StyledListItem>... plus {remainder} more</StyledListItem> : null}
    </List>
  );
}

export const ItemCard: React.FC<{item: Item}> = ({ item }) => {
  return (
    <Card w={60} h={60}>
      <Heading as="h5" size="sm" mb={2}>{item.name}</Heading>
      <Variants variants={item.variants} />
      <Button
        mt="auto"
        alignSelf="center"
        colorScheme="green"
        w="100%"
        as={Link}
        to={`/items/${item.id}`}
      >
        SELECT
      </Button>
    </Card>
  );
};
