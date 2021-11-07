import React, { useState } from "react";
import {
  Heading,
  List,
  ListItem,
  Button,
  ListItemProps,
  Box,
  Text,
  Image,
  ListProps,
} from "@chakra-ui/react";
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

interface VariantsProps extends ListProps {
  variants: Variant[];
}

const Variants: React.FC<VariantsProps> = ({ variants, ...props }) => {
  const firstFour = variants.slice(0, 4);
  const remainder = variants.length - firstFour.length;
  return (
    <List w="100%" {...props}>
      {firstFour.map((variant, i) => (
        <StyledListItem key={variant.id} isTruncated>
          Item {i + 1} - {variant.name}
        </StyledListItem>
      ))}
      {remainder ? (
        <StyledListItem>... plus {remainder} more</StyledListItem>
      ) : null}
    </List>
  );
};

export const ItemCard: React.FC<{ item: Item }> = ({ item }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const detailsOpacity = imageLoaded ? 1 : 0;

  return (
    <Box>
      <Card
        w={60}
        h={60}
        mb={1.5}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        position="relative"
      >
        <Image
          src={item.imageUrls[0]?.url}
          alt={item.name}
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          opacity={isHovering ? 0.2 : 1}
          zIndex={isHovering ? 0 : 1}
          onLoad={() => setImageLoaded(true)}
        />

        <Heading as="h5" size="sm" mb={2} opacity={detailsOpacity}>
          {item.name}
        </Heading>
        <Variants variants={item.variants} opacity={detailsOpacity} />
        <Button
          mt="auto"
          alignSelf="center"
          colorScheme="green"
          w="100%"
          opacity={detailsOpacity}
          as={Link}
          to={`/items/${item.id}`}
        >
          SELECT
        </Button>
      </Card>
      <Text fontSize="xs" fontWeight="semibold" textAlign="center">
        {item.name}
      </Text>
    </Box>
  );
};
