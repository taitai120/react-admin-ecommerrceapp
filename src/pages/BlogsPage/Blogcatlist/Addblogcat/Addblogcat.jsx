import React, { useState, useEffect } from "react";
import CustomInputs from "../../../../components/CustomInputs/CustomInputs";
import "./Addblogcat.scss";

const Addblogcat = () => {
    return (
        <div>
            <h3 className="mb-4 title">Add Blog Category</h3>
            <div className="">
                <form action="">
                    <CustomInputs type="text" label="Enter blog category" />
                    <button className="btn btn-success border-0 rounded-3 my-5">
                        Add Blog Category
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addblogcat;
