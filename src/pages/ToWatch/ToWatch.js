import React, { useContext } from 'react'
import Movies from '../../components/Movies/Movies'
import { ToWatchContext } from '../../context/ToWatchContext'
import './ToWatch.css'

const ToWatch = () => {
    const [watch] = useContext(ToWatchContext)

    return (
        <div className='to-watch page'>
            <h1>To Watch</h1>
            <Movies movies={watch} />
        </div>
    )
}

export default ToWatch
