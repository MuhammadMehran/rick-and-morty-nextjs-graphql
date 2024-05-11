import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Box,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export const Episodes = ({ episodes }) => {
  const router = useRouter();

  return (
    <Card
      className="mt-10 mr-10 ml-5 md:ml-5"
      marginBottom="10"
      flexDir={{ md: "row", sm: "column", xs: "column" }}
    >
      <CardHeader>
        <Heading size="md">Episodes</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {episodes.map((episode) => (
            <Box
              key={episode.id}
              onClick={() => {
                router.push(`/episode/${episode.id}`);
              }}
            >
              <Heading size="xs" textTransform="uppercase">
                {episode.name}
              </Heading>
              <Text pt="2" fontSize="sm">
                {episode.episode} - {episode.air_date}
              </Text>
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};
