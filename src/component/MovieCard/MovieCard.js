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
                </div>
                <div className="cardInfo">
                    <p className="overview">Popularity: {movie?movie.popularity:""}</p>
                    <p className="release">vote average: {movie?movie.vote_average:""}</p>
                </div>
                
                </div>
                
        </Link>
    }
    </>
}

export default MovieCard ;
