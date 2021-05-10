import React, { useContext } from 'react'
import { SelectedContext } from '../../context/SelectedContext'
import './Sidebar.css'

const Sidebar = () => {
    const { selected, setSelected } = useContext(SelectedContext)

    const updateSelected = e => {
        setSelected(e.target.getAttribute('name'))
    }

    return (
        <div className='sidebar'>
            <h4 className={selected === 'Search' ? 'selected' : ''} name='Search' onClick={updateSelected}>Search</h4>
            <h4 className={selected === 'Favourites' ? 'selected' : ''} name='Favourites' onClick={updateSelected}>My Favourites</h4>
            <h4 className={selected === 'ToWatch' ? 'selected' : ''} name='ToWatch' onClick={updateSelected}>To Watch</h4>
        </div>
    )
}

export default Sidebar
