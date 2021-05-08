/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserList = /* GraphQL */ `
  query GetUserList($id: ID!) {
    getUserList(id: $id) {
      id
      username
      favourites
      toWatch
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
        favourites
        toWatch
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
