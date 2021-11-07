import React from "react";
import { Card } from "./Card";
import { Variant } from "../services/items";
import { Heading, Text } from "@chakra-ui/react";
import NumberFormat from "react-number-format";

export const VariantCard: React.FC<{ variant: Variant }> = ({ variant }) => {
  return (
    <Card w={64} h={48}>
      <Heading as="h5" size="sm" mb={2}>
        {variant.name}
      </Heading>
      <Text fontSize="sm">{variant.description}</Text>
      <Text mt="auto" color="green.400" fontWeight="semibold">
        <NumberFormat
          value={variant.price / 100}
          displayType="text"
          thousandSeparator={true}
          prefix={"$"}
          decimalScale={2}
          fixedDecimalScale={true}
        />
      </Text>
    </Card>
  );
};
