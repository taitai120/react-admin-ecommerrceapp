import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customer/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import pcategoryReducer from "../features/pcategory/pcategorySlice";
import blogReducer from "../features/blog/blogSlice";
import bcategoryReducer from "../features/bcategory/bcategorySlice";
import colorReducer from "../features/color/colorSlice";
import enquiryReducer from "../features/enquiry/enquirySlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        product: productReducer,
        brand: brandReducer,
        pcategory: pcategoryReducer,
        blog: blogReducer,
        bcategory: bcategoryReducer,
        color: colorReducer,
        enquiry: enquiryReducer,
    },
});

export default store;
