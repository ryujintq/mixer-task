import React from 'react'
import './OverviewEntry.css'

const OverviewEntry = ({ heading, data }) => {
    return (
        <div className='overview-entry'>
            <h2>{heading}</h2>
            <p>{data}</p>
        </div>
    )
}

export default OverviewEntry
