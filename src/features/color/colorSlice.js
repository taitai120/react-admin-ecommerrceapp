import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import colorService from "./colorService";

const initialState = {
    colors: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};

export const getAllColors = createAsyncThunk(
    "colors/get-all-colors",
    async (_, thunkAPI) => {
        try {
            return await colorService.getAllColors();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const colorSlice = createSlice({
    name: "colors",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllColors.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllColors.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.colors = action.payload;
            })
            .addCase(getAllColors.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});

export default colorSlice.reducer;
