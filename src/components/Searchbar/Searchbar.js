import React from 'react'
import './Searchbar.css'

const Searchbar = ({ title, onChange, onConfirm }) => {
    const handleEnterPress = e => {
        if (e.key === 'Enter') {
            onConfirm()
        }
    }

    return (
        <div className="searchbar">
            <input
                className='searchbar-input'
                value={title}
                onChange={onChange}
                placeholder='Search for a movie'
                onKeyPress={handleEnterPress}
            />
            <i className="fas fa-search searchbar-icon" onClick={onConfirm}></i>
        </div>

    )
}

export default Searchbar
