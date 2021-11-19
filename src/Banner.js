import { useEffect, useState } from 'react';
import {fetchData} from './axios'
import end_points from './request';

import './Banner.css';

const fetchUrl = end_points.fetchNetflixOriginals

function Banner() {
    const [movie,setMovie] =useState ({});

    useEffect(() => {
        fetchData(fetchUrl).then(res => setMovie(res[Math.floor(Math.random() * res.length - 1 )]))
            .catch(err => {console.log(err)})
    }, [])


    return (
        <header>
            {/* <h1>{movie.name}</h1> */}
            <div>
                {/* <button>Play Now</button>
                <button>My WatchList</button> */}
            </div>
        </header>
    )
}

export default Banner