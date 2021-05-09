import axios from 'axios'

export const getBySearch = async string => {
    return await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6f6a570601756007d5aff4d3a99c8b61&query=${string}`)
}

export const getPopular = async () => {
    const result = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6f6a570601756007d5aff4d3a99c8b61&language=en-US&page=1')
    // console.log(result)
    return result
}

export const getImageURL = path => {
    return `https://image.tmdb.org/t/p/w500${path}`
}
