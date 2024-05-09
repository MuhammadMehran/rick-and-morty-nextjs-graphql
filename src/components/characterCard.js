import React from "react";
import { Tag, Box } from "@chakra-ui/react";
const CharacterCard = ({ title, img, onClick }) => {
  return (
    <div onClick={onClick}>
      <Box
        transition="border-color 0.3s"
        _hover={{
          borderColor: "blue.500",
        }}
        border="3px solid transparent"
        backgroundImage={`url(${img})`}
        backgroundSize="cover"
        backgroundPosition="center"
        height="200"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="lg"
      >
        <Box textAlign="center" paddingTop="150">
          <Tag size="lg" variant="solid" colorScheme="blue">
            {title}
          </Tag>
        </Box>
      </Box>
    </div>
  );
};

export default CharacterCard;
