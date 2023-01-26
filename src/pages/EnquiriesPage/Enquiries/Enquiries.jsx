import React, { useEffect } from "react";
import "./Enquiries.scss";
import { Button, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getAllEnquiries } from "../../../features/enquiry/enquirySlice";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
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
        title: "Comment",
        dataIndex: "comment",
    },
    {
        title: "Status",
        dataIndex: "status",
        render: (_, record) => (
            <>
                <select name="" id="" className="form-control form-select">
                    <option value="">Set Status</option>
                    <option defaultValue={record.status}>
                        {record.status}
                    </option>
                </select>
            </>
        ),
    },
    {
        title: "Action",
        dataIndex: "action",
        render: (_, record) => (
            <Space size="middle">
                <Link to={`/product/${record.id}`}>
                    <BiEdit className="fs-3" />
                </Link>
                <Link>
                    <AiFillDelete className="ms-3 text-danger fs-3" />
                </Link>
            </Space>
        ),
    },
];

const Enquiries = () => {
    const dispatch = useDispatch();
    const { enquiries } = useSelector((state) => state.enquiry);

    useEffect(() => {
        dispatch(getAllEnquiries());
    }, []);

    const data = [
        {
            name: "tai",
            email: "phantuantai120@gmail.com",
            mobile: "0789989959",
            comment: "perfect",
            status: "Online",
        },
    ];
    for (let i = 0; i < enquiries?.length; i++) {
        data.push({
            key: i + 1,
            name: enquiries[i].name,
            email: enquiries[i].email,
            mobile: enquiries[i].mobile,
            comment: enquiries[i].comment,
            status: enquiries[i].status,
        });
    }

    return (
        <div className="mt-4">
            <h3 className="mb-4 title">Enquiries</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Enquiries;
