import React from "react";
import Link from "next/link";
import {
  Box,
  Heading,
  Image,
  PseudoBox,
  Button,
  Divider,
  Tooltip,
} from "@chakra-ui/react";
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaUserPlus,
  FaGlobeAfrica,
} from "react-icons/fa";
import { Row } from "./row";
import { genderMap, statusMap } from "@/lib/styleMap";

const CharacterItem = (props) => {
  const { id, name, status, species, type, gender, image, location, origin } =
    props;

  return (
    <div className="w-full">
      <Box
        flexDir={{ md: "row", sm: "column", xs: "column" }}
        justifyContent="normal"
        maxWidth="70%"
        marginLeft="auto"
        marginRight="auto"
        marginBottom="10"
        className="mt-10"
      >
        <Box
          flex="0 0 60%"
          shadow="lg"
          marginRight={{ md: "20px", sm: "0px", xs: "0px" }}
          marginBottom={{ md: "0px", sm: "20px", xs: "20px" }}
          marginTop={{ md: "0px", sm: "20px", xs: "20px" }}
          paddingTop="15px"
        >
          <Image
            src={image}
            alt={name}
            width="50%"
            borderRadius="1000px"
            border="2px solid teal"
            shadow="lg"
            justifySelf="center"
            margin="0 auto"
          />
          <Heading fontSize="3xl" textAlign="center" mt="20px" mb="20px">
            {name}
          </Heading>
          <Divider />

          <Box className="p-5">
            <Row {...statusMap[status]} label="Status:" />
            <Row {...genderMap[gender]} label="Gender:" />
            <Row
              color="gray"
              text={species}
              icon={FaUserAlt}
              label="Species:"
            />
            <Row
              color="gray"
              text={type ? type : "No type"}
              icon={FaUserPlus}
              label="Type:"
            />
            <Row
              color="gray"
              text={origin.name}
              icon={FaGlobeAfrica}
              label="Origin:"
            />
            <Row
              color="gray"
              text={location.name}
              icon={FaMapMarkerAlt}
              label="Location:"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CharacterItem;
