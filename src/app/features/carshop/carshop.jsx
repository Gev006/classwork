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
                    return <Box
                        height={200}
                        width={200}
                        my={4}
                        display="flex"
                        alignItems="center"
                        gap={4}
                        p={2}
                        sx={{ border: '2px solid grey' }}
                        key={index * Math.random()}>
                            
                        <div className={styles.car}>
                            <div>Brand:: {car.brand}</div>
                            <div>Model:: {car.model}</div>
                            <div>Year:: {car.year}</div>
                            <div>Price:: {car.price}$</div>

                        </div>

                    </Box>
                })
            }
        </div>
    )
}

export default CarShop