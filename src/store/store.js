import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice.js";
let store = configureStore({
    
    reducer:{
        cart: cartSlice
    }
})

export default store