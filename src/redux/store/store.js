import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import cartSlice from "../slices/cartSlice";
import countSlice from "../slices/countSlice";
import pageSlice from "../slices/pageSlice";




const store = configureStore({
  reducer: {
    products:productSlice,
    cart:cartSlice,
    count:countSlice, 
    page:pageSlice
  },
});

export default store;