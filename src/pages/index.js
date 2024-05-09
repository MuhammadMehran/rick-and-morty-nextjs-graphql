import Image from "next/image";
import { useQuery, gql } from "@apollo/client";
import CharacterCard from "@/components/characterCard";

const GET_CHARACTERS = gql`
  query {
    characters(page: 1) {
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
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error !</p>;

  return (
    <div>
      <div className="flex flex-col pt-5 pb-5 mt-5 justify-center items-center w-full bg-blue-500">
        <h2 className="text-3xl text-white font-bold ">Characters</h2>
      </div>
      <div className="m-12 mt-0 p-10 rounded-xl flex justify-center items-center bg-white-300">
        <div className="container mx-0 md:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5">
            {data.characters.results.map((character) => (
              <CharacterCard
                key={character.id}
                title={character.name}
                img={character.image}
              />
            ))}
          </div>
          {/* <div className="mt-10">
            <PaginationButtons
              currentPage={currentPage}
              totalPages={totalPages}
              onNextClick={nextPage}
              onPrevClick={prevPage}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
