import React, { useContext } from 'react'
import { getImageURL } from '../../api/api'
import OverviewEntry from '../../components/OverviewEntry/OverviewEntry'
import { OverviewContext } from '../../context/OverviewContext'
import './Overview.css'

const Overview = () => {
    const { overview, setOverview } = useContext(OverviewContext)

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
                        <OverviewEntry heading='Title' data={overview.title} />
                        <OverviewEntry heading='Description' data={overview.overview} />
                        <OverviewEntry heading='Release Data' data={overview.release_date} />
                        <OverviewEntry heading='Rating' data={overview.vote_average} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
