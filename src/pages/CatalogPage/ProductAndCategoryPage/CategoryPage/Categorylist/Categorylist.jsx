import React, { useEffect } from "react";
import "./Categorylist.scss";
import { Button, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getAllProductCategories } from "../../../../../features/pcategory/pcategorySlice";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Title",
        dataIndex: "title",
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

const Categorylist = () => {
    const dispatch = useDispatch();
    const { pcategories } = useSelector((state) => state.pcategory);

    useEffect(() => {
        dispatch(getAllProductCategories());
    }, []);

    const data = [];
    for (let i = 0; i < pcategories?.length; i++) {
        data.push({
            key: i + 1,
            title: pcategories[i].title,
        });
    }

    return (
        <div className="mt-4">
            <h3 className="mb-4 title">Product Categories</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Categorylist;
