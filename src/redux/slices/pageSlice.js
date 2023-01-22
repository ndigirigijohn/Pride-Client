import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState:1,
  reducers: {
    changePage: (state, { payload }) => {
      return state = payload;
   }
  },
});

export const { changePage } = pageSlice.actions;

export default pageSlice.reducer;