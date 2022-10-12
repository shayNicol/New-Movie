import React,{useEffect, useState} from 'react'
import MovieCard from '../../component/MovieCard/MovieCard'
import './MovieList.css';



const MovieList = () => {

    const url =
    "https://api.themoviedb.org/3/trending/all/week?api_key=781f44fe34ee8390e481e4570e5b6e9d";

   
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetchTrending();
      }, []);

    const fetchTrending = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        console.log(movies);
        setMovieList(movies.results);
      };

    
    return (
        <div className="movies">
            <div className="moviecard">
                
                {movieList?.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList;