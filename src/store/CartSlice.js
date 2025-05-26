import {createSlice} from '@reduxjs/toolkit'
const CartSlice= createSlice({
        name:"cart",
        initialState:[],
        reducer:{
            addItem(state,action){},
            removeItem(state,action){}
        }
})
export default CartSlice.reducer
export let {addItem,removeItem}= CartSlice.actions