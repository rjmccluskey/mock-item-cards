import React from "react";
import { Flex } from "@chakra-ui/react";

export const Header: React.FC = ({ children }) => {
  return (
    <Flex w="100%" h={8} mb={10} borderBottom="1px" borderColor="gray.500">
      {children}
    </Flex>
  );
};
