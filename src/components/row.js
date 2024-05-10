import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

export const Row = ({ color, icon, label, text }) => (
  <Box d="flex" mb="10px">
    <Text fontWeight="bold" mr="10px" fontSize="lg">
      {label}
    </Text>

    <Box d="flex" alignItems="center" color={color} fontSize="lg">
      <Box w="20px" as={icon} mr="5px" />
      {text.charAt(0).toUpperCase() + text.substring(1)}
    </Box>
  </Box>
);
