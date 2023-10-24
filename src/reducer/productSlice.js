import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
	isLoading: false,
	data: [],
};
export const fetchproduct = createAsyncThunk("fetchproduct", async () => {
	const options = {
		method: "GET",
		url: " https://api.escuelajs.co/api/v1/products",
		// url: "https://asos2.p.rapidapi.com/products/v2/list",
		// params: {
		// 	store: "US",
		// 	offset: "0",
		// 	categoryId: "4209",
		// 	limit: "48",
		// 	country: "US",
		// 	sort: "freshness",
		// 	currency: "USD",
		// 	sizeSchema: "US",
		// 	lang: "en-US",
		// },
		// headers: {
		// 	"X-RapidAPI-Key": "47a78b333fmsha7f185d94bc8846p17d75fjsn2adc29b1d894",
		// 	"X-RapidAPI-Host": "asos2.p.rapidapi.com",
		// },
	};

	try {
		const response = await axios.get("https://api.escuelajs.co/api/v1/products");
		return response.data;
	} catch (error) {
		return error;
	}
});


const getProduct = createSlice({
	name: "getproduct",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchproduct.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchproduct.fulfilled, (state, action) => {
			state.data = action.payload;
			state.isLoading = false;
		});
	},
});

export default getProduct.reducer;
