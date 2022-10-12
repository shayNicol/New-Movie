import React, { useEffect} from "react";
import './Home.css'
import MovieList from '../../component/MovieList/MovieList'
import { useDispatch } from "react-redux";
import {fetchAsyncMovies} from "../../features/Movies/reducer";



const Home = () => {

  const dispatch = useDispatch();useEffect(() => {  dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <>
    <div>
      <MovieList />
    </div>
    </>
  );
};
export default Home;