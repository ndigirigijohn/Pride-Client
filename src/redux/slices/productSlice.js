import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    changeProduct: (state, { payload }) => {
      return state = payload;
   }
  },
});

export const { changeProduct } = productSlice.actions;

export default productSlice.reducer;