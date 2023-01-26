import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const localUser = localStorage.getItem("user");
const authenticated = localUser ? JSON.parse(localUser) : null;

const initialState = {
    user: authenticated,
    orders: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const login = createAsyncThunk(
    "auth/admin-login",
    async (user, thunkAPI) => {
        try {
            return await authService.login(user);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getAllOrders = createAsyncThunk(
    "user/get-all-orders",
    async (_, thunkAPI) => {
        try {
            return await authService.getAllOrders();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getAllOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllOrders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.orders = action.payload;
            })
            .addCase(getAllOrders.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});

export default authSlice.reducer;
