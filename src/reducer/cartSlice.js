import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	item: [],
	jsonItem: null,
};
export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		getCartItem: (state, action) => {
			state.item = [...state.item, action.payload];
			state.jsonItem = JSON.stringify([...state.item, state.item]);
			localStorage.setItem("cart_item", state.jsonItem);
		},
		onDelete: (state, action) => {
			let res = state.item.filter((v) => v.id !== action.payload);
			state.item = res
         console.log(action.payload);
		},
	},
});

export const { getCartItem, onDelete } = cartSlice.actions;
export default cartSlice.reducer;
