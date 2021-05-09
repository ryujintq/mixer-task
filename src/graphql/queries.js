/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserList = /* GraphQL */ `
  query GetUserList($id: ID!) {
    getUserList(id: $id) {
      id
      username
      favourites {
        title
        overview
        release_date
        poster_path
        vote_average
      }
      toWatch {
        title
        overview
        release_date
        poster_path
        vote_average
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
          title
          overview
          release_date
          poster_path
          vote_average
        }
        toWatch {
          title
          overview
          release_date
          poster_path
          vote_average
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
