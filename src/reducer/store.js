import { configureStore } from "@reduxjs/toolkit";
import getProduct from "./productSlice";
import cartSlice from "./cartSlice";
import singleP from "./singleproduct";
export const store = configureStore({
	reducer: {
		product: getProduct,
		cart: cartSlice,
		single: singleP,
	},
});
