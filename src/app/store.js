import { configureStore } from '@reduxjs/toolkit'
import carshopSlice from './features/carshop/carshopSlice'

 export const store = configureStore({
    reducer:{
        carshop: carshopSlice
    }
})