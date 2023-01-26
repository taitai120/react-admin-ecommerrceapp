import React, { useState, useEffect } from "react";
import "./Bloglist.scss";
import { Button, Space, Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../../../features/blog/blogSlice";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Title",
        dataIndex: "title",
        sorter: (a, b) => a.title?.length - b.title?.length,
    },
    {
        title: "Description",
        dataIndex: "description",
    },
    {
        title: "Category",
        dataIndex: "category",
        sorter: (a, b) => a.category?.length - b.category?.length,
    },
    {
        title: "Views",
        dataIndex: "numViews",
        sorter: (a, b) => a.numViews - b.numViews,
    },
    {
        title: "Image",
        dataIndex: "image",
        render: (_, record) => (
            <img
                src={record.image[0]}
                style={{ width: "150px", height: "100px" }}
            />
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

const Bloglist = () => {
    const dispatch = useDispatch();
    const { blogs } = useSelector((state) => state.blog);

    useEffect(() => {
        dispatch(getAllBlogs());
    }, []);

    const data = [];
    for (let i = 0; i < blogs?.length; i++) {
        data.push({
            key: i + 1,
            title: blogs[i].title,
            description: blogs[i].description,
            category: blogs[i].category,
            numViews: blogs[i].numViews,
            image: blogs[i].image,
        });
    }

    return (
        <div className="mt-4">
            <h3 className="mb-4 title">Bloglist</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Bloglist;
