import { gql } from "@apollo/client";
export const GET_CHARACTERS = gql`
  query Characters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
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

export const GET_CHARACTER = gql`
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
