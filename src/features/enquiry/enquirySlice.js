import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import enquiryService from "./enquiryService";

const initialState = {
    enquiries: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};

export const getAllEnquiries = createAsyncThunk(
    "enquiries/get-all-enquiries",
    async (_, thunkAPI) => {
        try {
            return await enquiryService.getAllEnquiries();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const enquirySlice = createSlice({
    name: "enquiries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllEnquiries.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllEnquiries.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.enquiries = action.payload;
            })
            .addCase(getAllEnquiries.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});

export default enquirySlice.reducer;
