import { createSlice } from '@reduxjs/toolkit'
import { deleteCar, getCars } from './carshopAPI'

const initialState = {
    isLoading: false,
    cars: []
}

export const carshopSlice = createSlice({
    name: "carshop",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
        .addCase(getCars.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getCars.fulfilled, (state,action)=>{
            state.isLoading = false,
            state.cars = action.payload
            return state
        })
    }
})

export const { } = carshopSlice.actions

export const carSelector = (state)=> state.carshop.cars
export const loadingSelector = (state)=> state.carshop.isLoading


export default carshopSlice.reducer