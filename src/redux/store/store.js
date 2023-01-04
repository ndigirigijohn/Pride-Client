import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import cartSlice from "../slices/cartSlice";
import countSlice from "../slices/countSlice";



const store = configureStore({
  reducer: {
    products:productSlice,
    cart:cartSlice,
    count:countSlice, 
  },
});

export default store;