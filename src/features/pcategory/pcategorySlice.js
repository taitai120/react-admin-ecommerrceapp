import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pcategoryService from "./pcategoryService";

const initialState = {
    pcategories: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};

export const getAllProductCategories = createAsyncThunk(
    "pcategories/get-all-pcategories",
    async (_, thunkAPI) => {
        try {
            return await pcategoryService.getAllProductCategories();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const pcategorySlice = createSlice({
    name: "pcategories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProductCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllProductCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.pcategories = action.payload;
            })
            .addCase(getAllProductCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});

export default pcategorySlice.reducer;
