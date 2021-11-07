import React from "react";
import { WrapItem, WrapItemProps } from "@chakra-ui/react";

export const Card: React.FC<WrapItemProps> = ({ children, ...props }) => {
  return (
    <WrapItem
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      flexDirection="column"
      p={2.5}
      boxShadow="base"
      {...props}
    >
      {children}
    </WrapItem>
  );
};
