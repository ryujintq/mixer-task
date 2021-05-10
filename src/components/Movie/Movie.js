import React, { useContext, useEffect, useState } from 'react'
import { getImageURL } from '../../api/api'
import { updateMovieList } from '../../api/graphql'
import { FavouritesContext } from '../../context/FavouritesContext'
import { ListIdContext } from '../../context/ListId'
import { OverviewContext } from '../../context/OverviewContext'
import { SelectedContext } from '../../context/SelectedContext'
import { ToWatchContext } from '../../context/ToWatchContext'
import './Movie.css'

const Movie = ({ movie }) => {
    const { listId } = useContext(ListIdContext)
    const { favourites, setFavourites } = useContext(FavouritesContext)
    const { toWatch, setToWatch } = useContext(ToWatchContext)
    const { setOverview } = useContext(OverviewContext)
    const { selected } = useContext(SelectedContext)

    const [isFaved, setIsFaved] = useState(false)
    const [isToWatched, setIsToWatched] = useState(false)

    const isAdded = (arr, title) => {
        const doesExist = arr.map(el => el.title).includes(title)
        return doesExist
    }

    //check to see if movie has been added to a list
    useEffect(() => {
        setIsFaved(isAdded(favourites, movie.title))
        setIsToWatched(isAdded(toWatch, movie.title))
    }, [favourites, toWatch, movie.title, setIsFaved, setIsToWatched])

    const handleOverview = () => {
        setOverview(movie)
    }

    const handleAddToFavourites = async () => {
        if (isFaved) return
        setFavourites(prevState => [...prevState, movie])
        await updateMovieList(listId, [...favourites, movie], toWatch)
    }

    const handleAddToToWatch = async () => {
        if (isToWatched) return
        setToWatch(prevState => [...prevState, movie])
        await updateMovieList(listId, favourites, [...toWatch, movie])
    }

    return (
        <div className='movie'>
            <img src={`${getImageURL(movie.poster_path)} `} alt="" />
            <div className="movie-overlay">
                <p onClick={handleOverview}>Overview</p>
                {selected === 'Search' && <p onClick={handleAddToFavourites}>{isFaved ? 'Already added to favourites' : 'Add To Favourites'}</p>}
                {selected === 'Search' && <p onClick={handleAddToToWatch}>{isToWatched ? 'Already added to watch list' : 'Add To Watchlist'}</p>}
            </div>
        </div>
    )
}

export default Movie
