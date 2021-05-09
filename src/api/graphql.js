import { API, Auth } from 'aws-amplify'
import { createUserList, updateUserList } from '../graphql/mutations'
import { getUserList } from '../graphql/queries';
import { localStorageGet, localStorageSet } from '../util/localStorage';

export const createList = async callback => {
    const { username } = await Auth.currentAuthenticatedUser();
    const response = await API.graphql({ query: createUserList, variables: { input: { username } } })
    localStorageSet('id', response.data.createUserList.id)
    callback(localStorageGet('id'))
}

export const getList = async id => {
    const response = await API.graphql({ query: getUserList, variables: { id } })
    return response.data.getUserList
}

export const updateMovieList = async (id, favourites, toWatch) => {
    await API.graphql({ query: updateUserList, variables: { input: { id, favourites: [...favourites], toWatch } } })
}
