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
export const updateUserList = /* GraphQL */ `
  mutation UpdateUserList(
    $input: UpdateUserListInput!
    $condition: ModelUserListConditionInput
  ) {
    updateUserList(input: $input, condition: $condition) {
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
export const deleteUserList = /* GraphQL */ `
  mutation DeleteUserList(
    $input: DeleteUserListInput!
    $condition: ModelUserListConditionInput
  ) {
    deleteUserList(input: $input, condition: $condition) {
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
