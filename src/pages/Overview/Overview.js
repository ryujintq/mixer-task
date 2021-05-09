import React, { useContext } from 'react'
import { getImageURL } from '../../api/api'
import { OverviewContext } from '../../context/OverviewContext'
import './Overview.css'

const Overview = () => {
    const [overview, setOverview] = useContext(OverviewContext)

    const handleClose = () => {
        setOverview(null)
    }

    return (
        <div className={`overview ${overview ? 'show-overview' : ''}`}>
            <h1>Overview</h1>
            <div className="overview-close" onClick={handleClose}>
                <i className="fas fa-times fa-3x"></i>
            </div>
            <div className="movie-info">
                <div className="movie-info-content">
                    <img src={`${getImageURL(overview.poster_path)}`} alt="" />
                    <div className="description">
                        <div className="entry">
                            <h2>Title</h2>
                            <p>{overview.title}</p>
                        </div>
                        <div className="entry">
                            <h2>Description</h2>
                            <p>{overview.overview}</p>
                        </div>
                        <div className="entry">
                            <h2>Release Data</h2>
                            <p>{overview.release_date}</p>
                        </div>
                        <div className="entry">
                            <h2>Rating</h2>
                            <p>{overview.vote_average}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
