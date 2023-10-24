import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	item: [],
};
export const singleP = createSlice({
   name: "single",
   initialState,
   reducers: {
      singlePItem: (state, action) => {
         state.item = action.payload
      }
   },

})
export const {singlePItem} = singleP.actions;
export default singleP.reducer;