import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import CharacterItem from "@/components/characterItem";
import Head from "next/head";
import { SkeletonCard } from "@/components/skeletonCard";
import { SkeletonEpisodes } from "@/components/skeletonEpisodes";
import { Episodes } from "@/components/episodes";
import { GET_CHARACTER } from "@/lib/queries";
const characterPage = () => {
  const router = useRouter();
  const { id } = router.query;

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
      <div className="grid grid-cols-1 lg:grid-cols-2  pt-5 w-full">
        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonEpisodes />
          </>
        ) : (
          <>
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

            <Episodes episodes={episode} />
          </>
        )}
      </div>
    </>
  );
};

export default characterPage;
