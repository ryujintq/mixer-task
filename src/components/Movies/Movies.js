import React from 'react'
import Movie from '../Movie/Movie'
import './Movies.css'

const Movies = ({ movies }) => {
    return (
        <div className='movies'>
            {movies.map(movie => (
                <Movie movie={movie} key={movie.id || movie.imbdID} />
            ))}
        </div>
    )
}

export default Movies
