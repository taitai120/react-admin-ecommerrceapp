import React from "react";
import "./CustomInputs.scss";

const CustomInputs = ({
    type,
    label,
    i_id,
    i_class,
    name,
    value,
    onChange,
    onBlur,
}) => {
    return (
        <div className="form-floating mb-3">
            <input
                type={type}
                className={`form-control ${i_class}`}
                id={i_id}
                placeholder={label}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            <label htmlFor={i_id}>{label}</label>
        </div>
    );
};

export default CustomInputs;
