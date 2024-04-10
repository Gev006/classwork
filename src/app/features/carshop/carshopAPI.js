import { createAsyncThunk } from '@reduxjs/toolkit'

const URL = "http://localhost:3000/cars"

export const getCars = createAsyncThunk(
    "users/getCars",
    async () => {
        return await fetch(URL).then(res => res.json().then(res => res))
    }
)