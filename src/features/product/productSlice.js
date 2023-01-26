import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
    products: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};

export const getAllProducts = createAsyncThunk(
    "products/get-all-customers",
    async (_, thunkAPI) => {
        try {
            return await productService.getAllProducts();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});

export default productSlice.reducer;
