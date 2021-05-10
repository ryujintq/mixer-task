import React, { useContext } from 'react'
import Movies from '../../components/Movies/Movies'
import { FavouritesContext } from '../../context/FavouritesContext'
import './Favourites.css'

const Favourites = () => {
    const { favourites } = useContext(FavouritesContext)

    return (
        <div className='favourites page'>
            <h1>Favourites</h1>
            {!favourites.length ? <p>No favourites added yet</p> : (
                <Movies movies={favourites} />
            )}
        </div>
    )
}

export default Favourites
