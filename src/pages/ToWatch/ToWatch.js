import React, { useContext } from 'react'
import Movies from '../../components/Movies/Movies'
import { ToWatchContext } from '../../context/ToWatchContext'
import './ToWatch.css'

const ToWatch = () => {
    const [toWatch] = useContext(ToWatchContext)

    return (
        <div className='to-watch page'>
            <h1>To Watch</h1>
            {!toWatch.length ? <p>No movies added to the watch list yet</p> : (
                <Movies movies={toWatch} />
            )}
        </div>
    )
}

export default ToWatch
