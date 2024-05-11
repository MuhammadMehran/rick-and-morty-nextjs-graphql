import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Stack,
  StackDivider,
  SkeletonText,
} from "@chakra-ui/react";

export const SkeletonEpisodes = () => {
  return (
    <Card
      className="mt-10 mr-10 ml-5 md:ml-5"
      marginBottom="10"
      flexDir={{ md: "row", sm: "column", xs: "column" }}
    >
      <CardHeader>
        <SkeletonText
          noOfLines={1}
          width="40%"
          spacing="4"
          skeletonHeight="8"
        />
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <SkeletonText
              noOfLines={2}
              width="30%"
              spacing="4"
              skeletonHeight="7"
            />
          </Box>
          <Box>
            <SkeletonText
              noOfLines={2}
              width="30%"
              spacing="4"
              skeletonHeight="7"
            />
          </Box>
          <Box>
            <SkeletonText
              noOfLines={2}
              width="30%"
              spacing="4"
              skeletonHeight="7"
            />
          </Box>
          <Box>
            <SkeletonText
              noOfLines={2}
              width="30%"
              spacing="4"
              skeletonHeight="7"
            />
          </Box>
          <Box>
            <SkeletonText
              noOfLines={2}
              width="30%"
              spacing="4"
              skeletonHeight="7"
            />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
