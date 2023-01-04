import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState:0,
  reducers: {
    changeCount: (state, { payload }) => {
      return state = payload;
   }
  },
});

export const { changeCount } = countSlice.actions;

export default countSlice.reducer;