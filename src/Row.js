import {useState,useEffect} from 'react'
import {fetchData} from './axios'
import './Row.css'


function Row({ title,fetchUrl,isLargeRow }) {
    const [movies,setMovies] = useState([])

    useEffect(() => {
        fetchData(fetchUrl).then(res => setMovies(res))
            .catch(err => {console.log(err)})
    }, [fetchUrl])


    return (
        <div className="row">
            <h2 className="row-title">{title}</h2> {/* curly brackets are used in here for jsx. don't confuse with destructering. */}
            <div className="row-container">
                {movies.map((i) => <img
                    key={i.id}
                    src={`https://image.tmdb.org/t/p/w500/${isLargeRow ? i.poster_path : i.backdrop_path}`} alt={movies.name}
                    className={`poster ${isLargeRow && "row-poster-large"}`}
                />)}
            </div>
        </div>
    )
}

export default Row
