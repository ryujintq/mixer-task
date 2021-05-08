import React, { useContext } from 'react'
import { getImageURL } from '../../api/api'
import { FavouritesContext } from '../../context/FavouritesContext'
import { OverviewContext } from '../../context/OverviewContext'
import { SelectedContext } from '../../context/SelectedContext'
import { ToWatchContext } from '../../context/ToWatchContext'
import './Movie.css'

const Movie = ({ movie }) => {
    const [favourites, setFavourites] = useContext(FavouritesContext)
    const [toWatch, setToWatch] = useContext(ToWatchContext)
    const [overview, setOverview] = useContext(OverviewContext)
    const [selected] = useContext(SelectedContext)

    const handleOverview = () => {
        setOverview(movie)
    }

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
            <img src={`${getImageURL(movie.poster_path)}`} alt="" />
            <div className="movie-overlay">
                <p onClick={handleOverview}>Overview</p>
                {/* {selected === 'Search' && (
                    <>
                        <p onClick={handleAddToFavourites}>Add To Favourites</p>
                        <p onClick={handleAddToToWatch}>Add To Watchlist</p>
                    </>
                )} */}
                {selected === 'Search' && <p onClick={handleAddToFavourites}>Add To Favourites</p>}
                {selected === 'Search' && <p onClick={handleAddToToWatch}>Add To Watchlist</p>}
            </div>
        </div>
    )
}

export default Movie
