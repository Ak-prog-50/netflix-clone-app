import { useEffect, useState } from 'react';
import {fetchData} from './axios'
import end_points from './request';
import './Banner.css'

import './Banner.css';

const fetchUrl = end_points.fetchNetflixOriginals

function Banner() {
    const [movie,setMovie] =useState ({});

    useEffect(() => {
        fetchData(fetchUrl).then(res => setMovie(res[Math.floor(Math.random() * res.length - 1 )]))
            .catch(err => {console.log(err)})
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize : "cover",
                backgroundImage : `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition : "center center",
                }}>
            <div className="banner-content">
                <h1 className="banner-title">{ movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner-btns">
                    <button className="banner-btn">Play Now</button>
                    <button className="banner-btn">My WatchList</button>
                </div>
                <p className="banner-description">
                {truncate (movie?.overview, 100)}</p>
            </div>
            <div className = "banner-fadeBottom"/> 
        </header>
    )
}

export default Banner