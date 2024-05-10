import React from "react";
import { Box, Heading, Text, Flex, HStack, IconButton } from "@chakra-ui/react";

export const Row = ({ color, icon, label, text }) => (
  <HStack>
    <Text fontWeight="bold" mr="10px" fontSize="lg">
      {label}
    </Text>

    <Flex display="inline-block" color={color} fontSize="lg">
      <Box flex="1" w="20px" as={icon} mr="5px" />
    </Flex>
    <Text color={color} fontSize="lg">
      {text.charAt(0).toUpperCase() + text.substring(1)}
    </Text>
  </HStack>
);
