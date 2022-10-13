import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', 
async  () => {

  try { const {data} = await axios
      .get(`https://api.themoviedb.org/3/trending/all/week?api_key=781f44fe34ee8390e481e4570e5b6e9d`)
      return data;
  } catch (error) {
    console.log("Error");
  }
});


const initialState = {
    movies: {},
}

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => console.log("rejected"), 
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, selectedMovie: payload };
    },
  },

  









);


export default movieSlice.reducer;
