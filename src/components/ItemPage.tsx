import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem, Item } from "../services/items";
import {
  Container,
  Link,
  VStack,
  Image,
  Heading,
  Text,
  Wrap,
  Stack,
} from "@chakra-ui/react";
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
        <Link as={RouterLink} to="/items" color="blue.400" alignSelf="center">
          <ChevronLeftIcon w={6} h={6} mb={1} /> Back to Marketplace
        </Link>
      </Header>
      <Container maxW="container.xl">
        <Stack direction={["column", "column", "column", "row"]} spacing={9}>
          <Image
            alignSelf={["center", "center", "center", "flex-start"]}
            w={["md", "md", "md", "sm"]}
            flexShrink={0}
            objectFit="contain"
            src={item.imageUrls[0]?.url}
            alt={item.name}
          />
          <VStack spacing={9}>
            <Container maxW="100%" p={0} m={0} alignSelf="flex-start">
              <Heading mb={2}>{item.name}</Heading>
              <Text>{item.description}</Text>
            </Container>
            <Wrap spacing={6} alignSelf="flex-start">
              {item.variants.map((variant) => (
                <VariantCard variant={variant} key={variant.id} />
              ))}
            </Wrap>
          </VStack>
        </Stack>
      </Container>
    </VStack>
  );
};
