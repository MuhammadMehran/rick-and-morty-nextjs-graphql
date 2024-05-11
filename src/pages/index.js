import Head from "next/head";
import { useQuery } from "@apollo/client";
import CharacterCard from "@/components/characterCard";
import {
  Box,
  Flex,
  Skeleton,
  Button,
  Image,
  Progress,
  Center,
  Input,
  IconButton,
  Select,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Lottie from "lottie-react";
import { mortyAnimation } from "@/lib/mortyAnimation";
import { useRouter } from "next/router";
import { GET_CHARACTERS } from "@/lib/queries";

export default function Home() {
  const router = useRouter();
  const [page, setPage] = useState(2);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const init_filter = {
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  };
  const [filter, setFilter] = useState(init_filter);

  const { error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page: 1, filter, filter },
    onCompleted: (data) => {
      setCharacters(data.characters.results);
      setPage(data.characters.info.next);
      setLoading(false);
    },
  });

  const search = () => {
    setPage(2);
    setLoading(true);
    setFilter({
      name,
      status,
      species,
      type,
      gender,
    });
  };

  const clear = () => {
    setName("");
    setStatus("");
    setSpecies("");
    setType("");
    setGender("");
    setPage(2);
    setFilter(init_filter);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

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
        },
      }).then(() => {
        setLoading(false);
      });
    }
  };

  return (
    <div>
      <Head>
        <title>Rick and Morty</title>
      </Head>
      {loading && (
        <Box position="fixed" top="0" left="0" right="0" zIndex="999">
          <Progress size="sm" isIndeterminate colorScheme="blue" />
        </Box>
      )}

      <Center className="mt-10">
        <h2
          className="text-4xl text-cyan-600"
          style={{ fontFamily: "Get Schwifty" }}
        >
          Characters
        </h2>
      </Center>

      <div className="m-12 mt-0 p-10 rounded-xl flex justify-center items-center bg-white-300">
        <div className="container mx-0 md:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-5">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name..."
              onKeyUp={handleKeyPress}
            />
            <Input
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              placeholder="Species..."
              onKeyUp={handleKeyPress}
            />
            <Input
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Type..."
              onKeyUp={handleKeyPress}
            />
            <Select
              value={status}
              placeholder="Status..."
              onChange={(e) => setStatus(e.target.value)}
              onKeyUp={handleKeyPress}
            >
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
              <option value="unknown">unknown</option>
            </Select>
            <Select
              value={gender}
              placeholder="Gender..."
              onChange={(e) => setGender(e.target.value)}
              onKeyUp={handleKeyPress}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderless">Genderless</option>
              <option value="unknown">unknown</option>
            </Select>

            <p className="w-full">
              <Button
                className="ml-0 md:ml-2 mt-2 md:mt-0 w-full md:w-[70%]"
                colorScheme="blue"
                variant="solid"
                isLoading={loading}
                onClick={search}
              >
                Search
              </Button>
              <IconButton
                className="ml-0 md:ml-2 mt-2 md:mt-0 w-full md:w-auto"
                variant="solid"
                colorScheme="red"
                aria-label="Clear"
                fontSize="20px"
                onClick={clear}
                icon={<CloseIcon />}
              />
            </p>
          </div>
          {!loading && characters.length == 0 && (
            <Center className="m-5">
              <Image src="/404.png" width="50%" height="50%" />
            </Center>
          )}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5">
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                title={character.name}
                img={character.image}
                onClick={() => {
                  router.push(`/character/${character.id}`);
                }}
              />
            ))}
            {loading && (
              <>
                <Box position="fixed" top="0" left="0" right="0" zIndex="999">
                  <Center>
                    <Lottie
                      animationData={mortyAnimation}
                      loop={true}
                      style={{ width: "30%", height: "20%" }}
                    />
                  </Center>
                </Box>

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
