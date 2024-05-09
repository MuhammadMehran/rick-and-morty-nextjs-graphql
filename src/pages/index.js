import Image from "next/image";
import { useQuery, gql } from "@apollo/client";
import CharacterCard from "@/components/characterCard";
import { Box, Flex, Skeleton, Button, Progress } from "@chakra-ui/react";
import { useState } from "react";

const GET_CHARACTERS = gql`
  query Characters($page: Int!) {
    characters(page: $page) {
      info {
        next
      }
      results {
        id
        name
        image
        species
      }
    }
  }
`;
export default function Home() {
  const [page, setPage] = useState(2);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const { error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 },
    onCompleted: (data) => {
      setCharacters(data.characters.results);
      setLoading(false);
    },
  });

  const loadMoreCharacters = () => {
    setLoading(true);
    if (page) {
      fetchMore({
        variables: {
          page: page,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;

          setCharacters([...characters, ...fetchMoreResult.characters.results]);
          setPage(fetchMoreResult.characters.info.next);
          return {
            characters: {
              ...fetchMoreResult.characters,
            },
          };
        },
      }).then(() => {
        setLoading(false);
      });
    }
  };

  return (
    <div>
      {loading && (
        <Box position="fixed" top="0" left="0" right="0" zIndex="999">
          <Progress size="sm" isIndeterminate colorScheme="blue" />
        </Box>
      )}

      <div className="flex flex-col pt-5 pb-5 mt-5 justify-center items-center w-full">
        <h2 className="text-3xl text-cyan-600 font-bold">Characters</h2>
      </div>

      <div className="m-12 mt-0 p-10 rounded-xl flex justify-center items-center bg-white-300">
        <div className="container mx-0 md:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5">
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                title={character.name}
                img={character.image}
              />
            ))}
            {loading && (
              <>
                {Array.from({ length: 20 }, (_, index) => index + 1).map(
                  (_, index) => (
                    <Box key={index} w="100%" height="200" borderRadius="lg">
                      <Skeleton width="100%" height="100%" my="5" />
                    </Box>
                  )
                )}
              </>
            )}
          </div>
          {page && (
            <Flex justifyContent="center" className="mt-10">
              <Button
                onClick={loadMoreCharacters}
                colorScheme="blue"
                variant="outline"
                isLoading={loading}
              >
                Load More
              </Button>
            </Flex>
          )}
        </div>
      </div>
    </div>
  );
}
