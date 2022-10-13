import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import pnf from  '../images/pnf.jpeg'

const images = "https://image.tmdb.org/t/p/w500/";

const apiUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=781f44fe34ee8390e481e4570e5b6e9d`;

const MovieList = ( {
}) => {
const [movies, setMovies] = useState([]);

useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data)=> {
        setMovies(data.results)
      })
  }, []);
    return (
    <section className="movieslist">
      {movies.length > 0 ? movies.map((movie) => {
        return (
        <Link to={`/movie/${movie.id}`}>
        <div className="Poster">
            <img src={movie.poster_path ? `${images}${movie.poster_path}` : "https://www.movienewz.com/img/films/poster-holder.jpg"} alt={movie.title} />
            <div className="movieInfo">
                <h2>{movie.original_title}</h2>
                <p className="release">Release Date: {movie.release_date}</p>
                <p className="vote">Rating: {movie.vote_average}</p>
                <p className="overview">{movie.overview}</p>
                <p className="popularity">Popularity: {movie.popularity}</p>
            </div>
        </div>
        </Link>
        );
      }): <p class="no"><img src={pnf} alt ='logo'/></p>}
      </section>
    )
}
export default MovieList;