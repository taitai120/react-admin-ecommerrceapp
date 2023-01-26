import React, { useState, useEffect } from "react";
import CustomInputs from "../../../../../components/CustomInputs/CustomInputs";
import "./Addcategory.scss";

const Addcategory = () => {
    return (
        <div>
            <h3 className="mb-4 title">Add Category</h3>
            <div className="">
                <form action="">
                    <CustomInputs type="text" label="Enter color" />
                    <button className="btn btn-success border-0 rounded-3 my-5">
                        Add Brand
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addcategory;
