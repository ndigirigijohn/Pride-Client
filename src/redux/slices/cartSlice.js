import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    changeCart: (state, { payload }) => {
      return state = payload;
   }
  },
});

export const { changeCart } = cartSlice.actions;

export default cartSlice.reducer;