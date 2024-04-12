import { createAsyncThunk } from '@reduxjs/toolkit'

const URL = "http://localhost:3000/cars"

export const getCars = createAsyncThunk(
    "cars/getCars",
    async () => {
        return await fetch(URL)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    console.log("error")
                    throw Error
                }
            }
            ).then(res => res)
    }
)

export const deleteCar = createAsyncThunk(
    "cars/deleteCar",
    async (id) => {
        return await fetch(URL + "/" + id, {
            method: "DELETE"
        }).then(res => res.json()).then(res =>res)
    }
)

export const updateCar = createAsyncThunk(
    "cars/updateCar",
    async (id,car) => {
        return await fetch(URL + "/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...car,
                brand:"Երազ"
            })
        }).then(res => {
            return res.json()
        }).then(res =>  res)
    }
)