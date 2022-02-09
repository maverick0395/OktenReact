import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../services/movies.service";

export const getMovieDetails = createAsyncThunk(
    'movieDetailsSlice/getMovieDetails',
    async (movieId, {rejectWithValue}) => {
        try {
            const movieDetails = await moviesService.getById(movieId);
            return movieDetails
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)

export const getCast = createAsyncThunk(
    'movieDetailsSlice/getCast',
    async (movieId, {rejectWithValue}) => {
        try {
            const cast = await moviesService.getCast(movieId);
            return cast.cast;
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)

const movieDetailsSlice = createSlice({
    name: "movieDetailsSlice",
    initialState: {
        movieDetails: null,
        cast: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getMovieDetails.pending]:
            (state) => {
                state.status = 'pending';
                state.error = null;
            },
        [getMovieDetails.fulfilled]:
            (state, action) => {
                state.status = 'fulfilled';
                state.movieDetails = {...action.payload}
            },
        [getMovieDetails.rejected]:
            (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            },
        [getCast.pending]:
            (state) => {
                state.status = 'pending';
                state.error = null;
            },
        [getCast.fulfilled]:
            (state, action) => {
                state.status = 'fulfilled';
                state.cast = action.payload;
            },
        [getCast.rejected]:
            (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            }

    }
})

const movieDetailsReducer = movieDetailsSlice.reducer;

export default movieDetailsReducer;