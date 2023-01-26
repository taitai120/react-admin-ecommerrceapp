import React, { useEffect } from "react";
import "./Blogcatlist.scss";
import { Button, Table, Space } from "antd";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getAllBlogCategories } from "../../../features/bcategory/bcategorySlice";

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

const Blogcatlist = () => {
    const dispatch = useDispatch();
    const { bcategories } = useSelector((state) => state.bcategory);

    useEffect(() => {
        dispatch(getAllBlogCategories());
    }, []);

    const data = [];
    for (let i = 0; i < bcategories?.length; i++) {
        data.push({
            key: i + 1,
            title: bcategories[i].title,
        });
    }

    return (
        <div className="mt-4">
            <h3 className="mb-4 title">Blog Categories</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Blogcatlist;
