import React from 'react'
import { getImageURL } from '../../api/api'
import './Movie.css'

const Movie = ({ movie }) => {
    const imageURL = movie.poster_path ? getImageURL(movie.poster_path) : movie.Poster
    return (
        <div className='movie'>
            {movie.title || movie.Title}
            <img src={`${imageURL}`} alt="" />
            <div className="movie-overlay">
                <p>Overview</p>
                <p>Add To Favourites</p>
                <p>Add To Watchlist</p>
            </div>
        </div>
    )
}

export default Movie
