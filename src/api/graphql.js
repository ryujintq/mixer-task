import { API, Auth } from 'aws-amplify'
import { createUserList, updateUserList } from '../graphql/mutations'
import { localStorageSet } from '../util/localStorage';

export const createList = async () => {
    const { username } = await Auth.currentAuthenticatedUser();
    console.log(username)
    const response = await API.graphql({ query: createUserList, variables: { input: { username, favourites: [], toWatch: [] } } })
    localStorageSet('id', response.data.createUserList.id)
}

export const getList = async id => {
    const response = await API.graphql({ query: createUserList, variables: { input: { id } } })
    console.log(response)
    return response.data.createUserList
}

export const updateFavourites = async (id, favourites) => {
    const response = await API.graphql({ query: updateUserList, variables: { input: { id, favourites } } })
    console.log(response)
}

export const updateToWatch = async (id, toWatch) => {
    await API.graphql({ query: updateUserList, variables: { input: { id, toWatch } } })
}