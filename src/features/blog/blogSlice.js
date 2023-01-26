import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";

const initialState = {
    blogs: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};

export const getAllBlogs = createAsyncThunk(
    "blogs/get-all-blogs",
    async (_, thunkAPI) => {
        try {
            return await blogService.getAllBlogs();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const blogSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBlogs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.blogs = action.payload;
            })
            .addCase(getAllBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});

export default blogSlice.reducer;
