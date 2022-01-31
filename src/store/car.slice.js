import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../services";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carService.getAll();
            return cars
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(addCar({data: newCar}));
        } catch (e) {
            console.log(e.message);
        }
    }
)

export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCar',
    async (id, {dispatch}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}));
        } catch (e) {
            console.log(e.message);
        }
    }
)

export const updateCarThunk = createAsyncThunk(
    'carSlice/updateCar',
    async ({data}, {dispatch}) => {
        try {
            const updatedCar = await carService.updateById(data.id, data);
            dispatch(updateCar({data: updatedCar}));
        } catch (e) {
            console.log(e.message)
        }
    }
)

const carSlice = createSlice({
    name: "carSlice",
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data);
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        updateCar: (state, action) => {
            state.cars[state.cars.findIndex(car => car.id === action.payload.data.id)] = action.payload.data;
        }
    },
    extraReducers: {
        [getAllCars.pending]:
            (state, action) => {
                state.status = 'pending';
                state.error = null;
            },
        [getAllCars.fulfilled]:
            (state, action) => {
                state.status = 'fulfilled';
                state.cars = action.payload;
            },
        [getAllCars.rejected]:
            (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;

            },
    }
})

const carReducer = carSlice.reducer;

export const {addCar, deleteCar, updateCar} = carSlice.actions;

export default carReducer;



