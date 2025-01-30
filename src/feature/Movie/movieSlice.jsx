import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: [],
  original: [],
  trending: [],
  newArrival: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
      state.newArrival = action.payload.newArrival; // Added this to handle newArrival
    },
  },
});

export const { setMovies } = movieSlice.actions;

// Fixed selectors to match the correct state keys
export const selectRecommend = (state) => state.movie.recommend;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;
export const selectNewArrival = (state) => state.movie.newArrival; // Selector for newArrival

export default movieSlice.reducer;
