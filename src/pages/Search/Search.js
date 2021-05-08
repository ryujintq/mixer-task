import React, { useEffect, useState } from 'react'
import { getBySearch, getPopular } from '../../api/api'
import Movies from '../../components/Movies/Movies'
import Searchbar from '../../components/Searchbar/Searchbar'
import './Search.css'

const Search = () => {
    const [title, setTitle] = useState('')
    const [header, setHeader] = useState('')
    const [popularMovies, setPopularMovies] = useState([])
    const [searchedMovies, setSearchedMovies] = useState([])

    useEffect(() => {
        const fetchPopular = async () => {
            const populars = await getPopular()
            setPopularMovies(populars.data.results)
        }
        fetchPopular()
    }, [])

    useEffect(() => {
        if (!title) {
            setSearchedMovies([])
            setHeader('')
        }
    }, [title])

    const handleTitleChange = e => {
        setTitle(e.target.value)
    }

    const handleConfirm = async () => {
        const searched = await getBySearch(title)
        setHeader(`Search for ${title}`)
        setSearchedMovies(searched.data.Search)
    }

    return (
        <div className='search page'>
            <h1>Search</h1>
            <Searchbar title={title} onChange={handleTitleChange} onConfirm={handleConfirm} />
            <h2 >{header ? header : `Most Popular`}</h2>
            <Movies movies={searchedMovies.length > 0 ? searchedMovies : popularMovies} />
        </div>
    )
}

export default Search
