import React, { useState, useEffect } from "react";
import "./Customers.scss";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "antd";
import { getAllUsers } from "../../../features/customer/customerSlice";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Mobile",
        dataIndex: "mobile",
    },
    {
        title: "Address",
        dataIndex: "address",
    },
];

const Customers = () => {
    const dispatch = useDispatch();
    const { customers } = useSelector((state) => state.customer);

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    const data = [];
    for (let i = 0; i < customers?.length; i++) {
        if (customers[i].role !== "admin") {
            data.push({
                key: i + 1,
                name: customers[i].firstName + " " + customers[i].lastName,
                email: customers[i].email,
                mobile: customers[i].mobile,
                address: customers[i].address,
            });
        }
    }

    return (
        <div className="mt-4">
            <h3 className="mb-4 title">Customers</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Customers;
