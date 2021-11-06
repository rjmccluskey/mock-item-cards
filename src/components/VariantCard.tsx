import React from "react";
import { Card } from "./Card";
import { Variant } from "../services/items";
import { Heading, Text } from "@chakra-ui/react";
import NumberFormat from 'react-number-format';

export const VariantCard: React.FC<{ variant: Variant }> = ({ variant }) => {
  return (
    <Card w="240px" h="240px">
      <Heading as="h5" size="sm">{variant.name}</Heading>
      <Text>{variant.description}</Text>
      <Text>
        <NumberFormat
          value={variant.price / 100}
          displayType="text"
          thousandSeparator={true}
          prefix={'$'}
          decimalScale={2}
          fixedDecimalScale={true}
        />
      </Text>
    </Card>
  );
};
