import styles from "./carshop.module.css"
import { useSelector, useDispatch } from 'react-redux'
import { carSelector, loadingSelector } from "./carshopSlice"
import { useEffect } from "react"
import { getCars } from "./carshopAPI"
import Box from '@mui/material/Box';



function CarShop() {
    const dispatch = useDispatch()
    const cars = useSelector(carSelector)
    const isLoading = useSelector(loadingSelector)
    console.log(cars)
    useEffect(() => {
        dispatch(getCars())
    }, [])

    return (
        <div className={styles.container}>
            {isLoading && <div> Loading...</div>}
            {
                cars.map((car, index) => {
                    return <Box sx={{ display: "flex", flexDirection: "column", width: "30px", height: "40px" }}
                        key={index * Math.random()}>
                        <div>
                            <div>{car.brand}::::::{car.model}</div>
                        </div>

                    </Box>
                })
            }
        </div>
    )
}

export default CarShop