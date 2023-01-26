import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bcategoryService from "./bcategoryService";

const initialState = {
    bcategories: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};

export const getAllBlogCategories = createAsyncThunk(
    "bcategories/get-all-bcategories",
    async (_, thunkAPI) => {
        try {
            return await bcategoryService.getAllBlogCategories();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const bcategorySlice = createSlice({
    name: "bcategories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBlogCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllBlogCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.bcategories = action.payload;
            })
            .addCase(getAllBlogCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});

export default bcategorySlice.reducer;
