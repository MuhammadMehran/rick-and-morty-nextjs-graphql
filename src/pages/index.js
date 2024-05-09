import Image from "next/image";
import { useQuery, gql } from "@apollo/client";
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
      {data.characters.results.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <p>Species: {character.species}</p>
        </div>
      ))}
    </div>
  );
}
