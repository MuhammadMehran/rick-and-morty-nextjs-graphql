import React from "react";
import { Tag, Box } from "@chakra-ui/react";
import Link from "next/link";
const CharacterCard = ({ title, img, id }) => {
  return (
    <Link href={`/character/${id}`}>
      <div>
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
    </Link>
  );
};

export default CharacterCard;
