import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreServie} from "../services/genre.servie";

export const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const genres = await genreServie.getAll();
            return genres.genres;
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

const genreSlice = createSlice({
    name: "genreSlice",
    initialState: {
        genres: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllGenres.pending]:
            (state) => {
                state.status = 'pending';
                state.error = null;
            },
        [getAllGenres.fulfilled]:
            (state, action) => {
                state.status = 'fulfilled';
                state.genres = action.payload;
            },
        [getAllGenres.rejected]:
            (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
            }
    }
})

const genreReducer = genreSlice.reducer;

export default genreReducer;