import React, { useContext, useState } from 'react'
import { getImageURL } from '../../api/api'
import { updateMovieList } from '../../api/graphql'
import { FavouritesContext } from '../../context/FavouritesContext'
import { ListIdContext } from '../../context/ListId'
import { OverviewContext } from '../../context/OverviewContext'
import { SelectedContext } from '../../context/SelectedContext'
import { ToWatchContext } from '../../context/ToWatchContext'
import './Movie.css'

const Movie = ({ movie }) => {
    const [listId] = useContext(ListIdContext)
    const [favourites, setFavourites] = useContext(FavouritesContext)
    const [toWatch, setToWatch] = useContext(ToWatchContext)
    const [overview, setOverview] = useContext(OverviewContext)
    const [selected] = useContext(SelectedContext)
    const [favClicked, setFavClicked] = useState(false)
    const [toWatchClicked, setToWatchClicked] = useState(false)

    const handleOverview = () => {
        setOverview(movie)
    }

    const handleAddToFavourites = async () => {
        setFavClicked(true)
        setFavourites(prevState => {
            return [...prevState, movie]
        })
        await updateMovieList(listId, [...favourites, movie], toWatch)
    }

    const handleAddToToWatch = async () => {
        setToWatchClicked(true)
        setToWatch(prevState => {
            return [...prevState, movie]
        })
        await updateMovieList(listId, favourites, [...toWatch, movie])
    }

    return (
        <div className='movie'>
            <img src={`${getImageURL(movie.poster_path)} `} alt="" />
            <div className="movie-overlay">
                <p onClick={handleOverview}>Overview</p>
                {selected === 'Search' && <p onClick={handleAddToFavourites}>{favClicked ? 'Added to favs' : 'Add To Favourites'}</p>}
                {selected === 'Search' && <p onClick={handleAddToToWatch}>{toWatchClicked ? 'Added to watch list' : 'Add To Watchlist'}</p>}
            </div>
        </div>
    )
}

export default Movie
