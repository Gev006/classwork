import styles from "./carshop.module.css"
import { useSelector, useDispatch } from 'react-redux'
import { carSelector, loadingSelector } from "./carshopSlice"
import { useEffect } from "react"
import { deleteCar, getCars, updateCar } from "./carshopAPI"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


function CarShop() {
    const dispatch = useDispatch()
    const cars = useSelector(carSelector)
    const isLoading = useSelector(loadingSelector)

    useEffect(() => {
        dispatch(getCars())
    }, [])
  
    return (
        <div className={styles.container}>
            {isLoading && <div> Loading...</div>}
            {
                cars.map( car => {
                    return <div  key={car.id}
>
                        <Box
                        height={200}
                        width={300}
                        my={4}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        gap={4}
                        p={2}
                        sx={{ border: '2px solid grey' }}
                    >

                        <div className={styles.car}>
                            <div><span className={styles.title}>Brand:</span> {car.brand}</div>
                            <div><span className={styles.title}>Model:</span> {car.model}</div>
                            <div><span className={styles.title}>Year:</span> {car.year}</div>
                            <div><span className={styles.title}>Price:</span> {car.price}$</div>
                        </div>
                        <div className={styles.btns}>
                            <Link href={`http://localhost:3000/cars/${car.id}`} >More info</Link>

                            <Button variant="outlined" color="error" onClick={() =>{ 
                                dispatch(deleteCar(car.id))
                                dispatch(getCars())
                                }}>Delete</Button>
                            <Button variant="outlined" onClick={()=>{
                                dispatch(updateCar(car.id,car))
                                dispatch(getCars())
                            }}>Edit</Button>
                        </div>
                    </Box>
                    </div>
                })
            }
        </div>
    )
}

export default CarShop