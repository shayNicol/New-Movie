import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import pnf from  '../images/pnf.jpeg'
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';


const apiUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=781f44fe34ee8390e481e4570e5b6e9d`;

const MovieList = ( {
}) => {
const [moviesList, setMovies] = useState([]);

useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data)=> {
        setMovies(data.results)
      })
  }, []);
  return (
    <div className="movies">

        <h3 className='trending'>Trending All Week</h3>
        <div className="moviecard">
            {moviesList?.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            }
            
        </div>
        
    </div>
)
}
export default MovieList;