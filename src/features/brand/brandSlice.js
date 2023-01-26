import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import brandService from "./brandService";

const initialState = {
    brands: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};

export const getAllBrands = createAsyncThunk(
    "brands/get-all-brands",
    async (_, thunkAPI) => {
        try {
            return await brandService.getAllBrands();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const brandSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBrands.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllBrands.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.brands = action.payload;
            })
            .addCase(getAllBrands.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});

export default brandSlice.reducer;
