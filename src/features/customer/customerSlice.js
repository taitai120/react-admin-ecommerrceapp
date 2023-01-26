import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customerService from "./customerService";

const initialState = {
    customers: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const getAllUsers = createAsyncThunk(
    "customers/get-all-customers",
    async (_, thunkAPI) => {
        try {
            return await customerService.getAllUsers();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const customerSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.customers = action.payload;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});

export default customerSlice.reducer;
