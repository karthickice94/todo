import {configureStore} from '@reduxjs/toolkit'
import CartSliceReducer from './CartSlice'
export const Store= configureStore({
    reducer:{
        cart:CartSliceReducer
    
    }
})