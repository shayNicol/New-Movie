import React from "react";
import { Link } from "react-router-dom"
import './MovieCard.css';

const MovieCard = ({movie}) => {
    return <>
    {
        <Link to={`/movie/${movie.id}`}
        
        
        >
            <div className="cards">
                <img className='cards' src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}alt="" />
                <div>
                <div className="card__title">{movie?movie.original_title:""}</div>
                </div>
                </div>
        </Link>
    }
    </>
}

export default MovieCard ;
