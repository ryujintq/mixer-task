import React, { useContext } from 'react'
import Movies from '../../components/Movies/Movies'
import { ToWatchContext } from '../../context/ToWatchContext'
import './ToWatch.css'

const ToWatch = () => {
    const { toWatch } = useContext(ToWatchContext)
    return (
        <div className='favourites page'>
            <h1>Movies To Watch</h1>
            {!toWatch.length ? <p>No movies added to watch list yet</p> : (
                <Movies movies={toWatch} />
            )}
        </div>
    )
}

export default ToWatch
