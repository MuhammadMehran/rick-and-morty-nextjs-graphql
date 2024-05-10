import {
  Skeleton,
  Center,
  SkeletonCircle,
  SkeletonText,
  Box,
  Divider,
} from "@chakra-ui/react";

export const SkeletonCard = () => {
  return (
    <div className="w-full">
      <Box
        flexDir={{ md: "row", sm: "column", xs: "column" }}
        justifyContent="normal"
        maxWidth="70%"
        marginLeft="auto"
        marginRight="auto"
        className="mt-10"
        boxShadow="lg"
        bg="white"
      >
        <Box
          flex="0 0 60%"
          shadow="lg"
          marginRight={{ md: "20px", sm: "0px", xs: "0px" }}
          marginBottom={{ md: "0px", sm: "20px", xs: "20px" }}
          marginTop={{ md: "0px", sm: "20px", xs: "20px" }}
          paddingTop="15px"
        >
          <SkeletonCircle
            size="60"
            borderRadius="1000px"
            border="2px solid teal"
            shadow="lg"
            justifySelf="center"
            margin="0 auto"
          />
          <Center mt="20px" mb="20px">
            <SkeletonText
              noOfLines={1}
              width="40"
              spacing="4"
              skeletonHeight="7"
            />
          </Center>
          <Divider />
          <div className="m-3 p-4">
            <SkeletonText noOfLines={6} spacing="3" skeletonHeight="4" />
          </div>
        </Box>
      </Box>
    </div>
  );
};
