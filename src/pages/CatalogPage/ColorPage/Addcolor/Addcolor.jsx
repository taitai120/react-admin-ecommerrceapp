import React, { useState, useEffect } from "react";
import CustomInputs from "../../../../components/CustomInputs/CustomInputs";
import "./Addcolor.scss";

const Addcolor = () => {
    return (
        <div>
            <h3 className="mb-4 title">Add Color</h3>
            <div className="">
                <form action="">
                    <CustomInputs type="text" label="Enter color" />
                    <button className="btn btn-success border-0 rounded-3 my-5">
                        Add Color
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addcolor;
