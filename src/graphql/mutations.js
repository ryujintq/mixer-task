/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserList = /* GraphQL */ `
  mutation CreateUserList(
    $input: CreateUserListInput!
    $condition: ModelUserListConditionInput
  ) {
    createUserList(input: $input, condition: $condition) {
      id
      username
      favourites
      toWatch
      createdAt
      updatedAt
    }
  }
`;
export const updateUserList = /* GraphQL */ `
  mutation UpdateUserList(
    $input: UpdateUserListInput!
    $condition: ModelUserListConditionInput
  ) {
    updateUserList(input: $input, condition: $condition) {
      id
      username
      favourites
      toWatch
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserList = /* GraphQL */ `
  mutation DeleteUserList(
    $input: DeleteUserListInput!
    $condition: ModelUserListConditionInput
  ) {
    deleteUserList(input: $input, condition: $condition) {
      id
      username
      favourites
      toWatch
      createdAt
      updatedAt
    }
  }
`;
