import React, { useContext, useState } from 'react'
import { getImageURL } from '../../api/api'
import { FavouritesContext } from '../../context/FavouritesContext'
import { ToWatchContext } from '../../context/ToWatchContext'
import './Movie.css'

const Movie = ({ movie }) => {
    const [favourites, setFavourites] = useContext(FavouritesContext)
    const [toWatch, setToWatch] = useContext(ToWatchContext)

    const handleAddToFavourites = () => {
        setFavourites(prevFavs => {
            return [...prevFavs, movie]
        })
    }

    const handleAddToToWatch = () => {
        setToWatch(prevToWatch => {
            return [...prevToWatch, movie]
        })
    }

    return (
        <div className='movie'>
            {movie.title}
            <img src={`${getImageURL(movie.poster_path)}`} alt="" />
            <div className="movie-overlay">
                <p>Overview</p>
                <p onClick={handleAddToFavourites}>Add To Favourites</p>
                <p onClick={handleAddToToWatch}>Add To Watchlist</p>
            </div>
        </div>
    )
}

export default Movie
