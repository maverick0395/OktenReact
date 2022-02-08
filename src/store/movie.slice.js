import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../services/movies.service";

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (page, {rejectWithValue}) => {
        try {
            const movies = await moviesService.getAll(page);
            return movies.results;
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)



const movieSlice = createSlice({
    name: "movieSlice",
    initialState: {
        movies: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllMovies.pending]:
            (state, action) => {
                state.status = 'pending';
                state.error = null;
            },
        [getAllMovies.fulfilled]:
            (state, action) => {
                state.status = 'fulfilled';
                state.movies = action.payload;
            },
        [getAllMovies.rejected]:
            (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            }
    }
})

const movieReducer = movieSlice.reducer;

export default movieReducer;