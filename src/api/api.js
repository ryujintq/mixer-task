import axios from 'axios'

export const getByTitle = async title => {
    return await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=4a167d3d`)
}

export const getById = async Id => {
    return await axios.get(`http://www.omdbapi.com/?i=${Id}&apikey=4a167d3d`)
}

export const getBySearch = async string => {
    return await axios.get(`http://www.omdbapi.com/?s=${string}&apikey=4a167d3d`)
}

export const getPopular = async () => {
    return await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6f6a570601756007d5aff4d3a99c8b61&language=en-US&page=1')
}

export const getImageURL = path => {
    return `https://image.tmdb.org/t/p/w500${path}`
}
