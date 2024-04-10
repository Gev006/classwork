import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CarShop from './app/features/carshop/carshop.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
            <CarShop/>
    </Provider>
)
