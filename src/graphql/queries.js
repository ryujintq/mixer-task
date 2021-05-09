/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserList = /* GraphQL */ `
  query GetUserList($id: ID!) {
    getUserList(id: $id) {
      id
      username
      favourites {
        adult
        backdrop_path
        genre_ids
        id
        original_language
        original_title
        overview
        popularity
        poster_path
        release_date
        title
        video
        vote_average
        vote_count
      }
      toWatch {
        adult
        backdrop_path
        genre_ids
        id
        original_language
        original_title
        overview
        popularity
        poster_path
        release_date
        title
        video
        vote_average
        vote_count
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserLists = /* GraphQL */ `
  query ListUserLists(
    $filter: ModelUserListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        favourites {
          adult
          backdrop_path
          genre_ids
          id
          original_language
          original_title
          overview
          popularity
          poster_path
          release_date
          title
          video
          vote_average
          vote_count
        }
        toWatch {
          adult
          backdrop_path
          genre_ids
          id
          original_language
          original_title
          overview
          popularity
          poster_path
          release_date
          title
          video
          vote_average
          vote_count
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
