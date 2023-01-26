import React, { useState, useEffect } from "react";
import CustomInputs from "../../../../../components/CustomInputs/CustomInputs";
import "./Addproduct.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useFormik } from "formik";
import * as yup from "yup";
import { getAllBrands } from "../../../../../features/brand/brandSlice";
import { getAllProductCategories } from "../../../../../features/pcategory/pcategorySlice";
import Multiselect from "react-widgets/Multiselect";
import "react-widgets/styles.css";

const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    price: yup
        .string()
        .required("Price is required")
        .min(1, "Value must be greater than 0"),
    category: yup.string().required("Category is required"),
    brand: yup.string().required("Brand is required"),
    quantity: yup.string().required("Quantity is required"),
    sold: yup.number(),
    images: yup.array(),
    color: yup.string().required("Color is required"),
    ratings: yup.array(),
    totalRatings: yup.string(),
});

const Addproduct = () => {
    const dispatch = useDispatch();
    const { user, isLoading, isSuccess, isError, message } = useSelector(
        (state) => state.auth
    );
    const { brands } = useSelector((state) => state.brand);
    const { pcategories } = useSelector((state) => state.pcategory);

    useEffect(() => {
        dispatch(getAllBrands());
        dispatch(getAllProductCategories());
    }, []);

    const formik = useFormik({
        initialValues: {
            title: "",
            slug: "",
            description: "",
            price: 0,
            brand: "",
            pcategory: "",
            quantity: 0,
            sold: 0,
            images: [],
            color: "",
            ratings: [
                {
                    star: 0,
                    comment: "",
                    postedBy: {},
                },
            ],
            totalRatings: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values);
            alert(JSON.stringify(values));
        },
    });

    return (
        <div>
            <h3 className="mb-4 title">Add Product</h3>
            <div>
                <form
                    onSubmit={formik.handleSubmit}
                    className="d-flex gap-3 flex-column"
                >
                    <CustomInputs
                        type="text"
                        label="Enter Product Title"
                        name="title"
                        i_id="title"
                        value={formik.values.title}
                        onChange={formik.handleChange("title")}
                        onBlur={formik.handleBlur("title")}
                    />
                    {formik.touched.title && formik.errors.title ? (
                        <div className="formik-error">
                            {formik.errors.title}
                        </div>
                    ) : null}
                    <div className="mb-3">
                        <ReactQuill
                            theme="snow"
                            name="description"
                            i_id="description"
                            value={formik.values.description}
                            onChange={formik.handleChange("description")}
                            onBlur={formik.handleBlur("description")}
                        />
                    </div>
                    {formik.touched.description && formik.errors.description ? (
                        <div className="formik-error">
                            {formik.errors.description}
                        </div>
                    ) : null}
                    <CustomInputs
                        type="number"
                        label="Enter Product Price"
                        name="price"
                        value={formik.values.price}
                        onChange={formik.handleChange("price")}
                        onBlur={formik.handleBlur("price")}
                    />
                    {formik.touched.price && formik.errors.price ? (
                        <div className="formik-error">
                            {formik.errors.price}
                        </div>
                    ) : null}
                    <select
                        className="form-control form-select mb-3"
                        id="brand"
                        name="brand"
                        value={formik.values.brand}
                        onChange={formik.handleChange("brand")}
                        onBlur={formik.handleBlur("brand")}
                    >
                        <option value="">Select Brand</option>
                        {brands?.map((brand) => (
                            <option key={brand._id} value={brand.title}>
                                {brand.title}
                            </option>
                        ))}
                    </select>
                    {formik.touched.brand && formik.errors.brand ? (
                        <div className="formik-error">
                            {formik.errors.brand}
                        </div>
                    ) : null}
                    <select
                        className="form-control form-select mb-3"
                        id="pcategory"
                        name="pcategory"
                        value={formik.values.pcategory}
                        onChange={formik.handleChange("pcategory")}
                        onBlur={formik.handleBlur("pcategory")}
                    >
                        <option value="">Select Category</option>
                        {pcategories?.map((pcategory) => (
                            <option key={pcategory._id} value={pcategory.title}>
                                {pcategory.title}
                            </option>
                        ))}
                    </select>
                    {formik.touched.pcategory && formik.errors.pcategory ? (
                        <div className="formik-error">
                            {formik.errors.pcategory}
                        </div>
                    ) : null}
                    <CustomInputs
                        type="number"
                        label="Enter Product Stock"
                        name="quantity"
                        onChange={formik.handleChange("quantity")}
                    />
                    <CustomInputs
                        type="number"
                        label="Enter Product Sold"
                        name="sold"
                        onChange={formik.handleChange("sold")}
                    />
                    {/* <CustomInputs type="text" label="Enter Product Title" name="title" onChange={formik.handleChange("title")} /> */}
                    <Multiselect
                        dataKey="id"
                        textField="color"
                        defaultValue={[1]}
                        data={[
                            { id: 1, color: "Red" },
                            { id: 2, color: "Yellow" },
                            { id: 3, color: "Blue" },
                            { id: 4, color: "Orange" },
                        ]}
                    />
                    ;
                    {/* <CustomInputs type="text" label="Enter Product Title" name="title" onChange={formik.handleChange("title")} /> */}
                    <CustomInputs
                        type="text"
                        label="Enter Product Total Ratings"
                        name="totalRatings"
                        onChange={formik.handleChange("totalRatings")}
                    />
                    <div>
                        <button
                            className="border-0 rounded-3 px-3 py-2 text-center text-white text-decoration-none fw-bold fs-5"
                            style={{ background: "#ffd333" }}
                            type="submit"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addproduct;
