import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getItem, Item } from "../services/items";
import { Container, Link, VStack, Image, Heading, Text, Wrap } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Header } from "./Header";
import { VariantCard } from "./VariantCard";

export const ItemPage: React.FC = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Item>();
  useEffect(() => {
    if (id) {
      getItem(id).then(setItem);
    }
  }, [id]);

  if (!item) {
    return null;
  }

  return (
    <VStack>
      <Header>
        <Link as={RouterLink} to="/items">
          <ChevronLeftIcon w={6} h={6} mb={1} /> Back to Marketplace
        </Link>
      </Header>
      <Container maxW="container.xl">
        <Image objectFit="cover" src={item.imageUrls[0]?.url} alt={item.name} />
        <Heading>{item.name}</Heading>
        <Text>{item.description}</Text>
        <Wrap spacing="30px">
          {item.variants.map(variant => <VariantCard variant={variant} key={variant.id} />)}
        </Wrap>
      </Container>
    </VStack>
  );
};
