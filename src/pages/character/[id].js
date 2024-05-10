import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import CharacterItem from "@/components/characterItem";
import Head from "next/head";

const characterPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const GET_CHARACTER = gql`
    query Character($id: ID!) {
      character(id: $id) {
        id
        name
        status
        type
        gender
        origin {
          id
          name
        }
        species
        image
        episode {
          id
          name
          episode
          air_date
        }
        location {
          id
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: id },
  });
  const {
    name,
    image,
    status,
    species,
    type,
    gender,
    origin,
    location,
    episode,
  } = data ? data["character"] : {};

  return (
    <>
      {!loading && (
        <div>
          <Head>
            <title>{name}</title>
          </Head>
          <CharacterItem
            id={id}
            name={name}
            status={status}
            species={species}
            type={type}
            gender={gender}
            image={image}
            location={location}
            origin={origin}
          />
        </div>
      )}
    </>
  );
};

export default characterPage;
