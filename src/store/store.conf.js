import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "./movie.slice";
import genreReducer from "./genre.slice";
import movieDetailsReducer from "./movieDetails.slice";

const store = configureStore({
    reducer: {
        movieReducer,
        movieDetailsReducer,
        genreReducer
    }
})

export default store;