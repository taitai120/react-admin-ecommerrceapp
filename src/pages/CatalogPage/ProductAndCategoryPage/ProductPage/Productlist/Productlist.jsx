import React, { useState, useEffect } from "react";
import "./Productlist.scss";
import { Button, Space, Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../../../../features/product/productSlice";

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
        title: "Price",
        dataIndex: "price",
    },
    {
        title: "Brand",
        dataIndex: "brand",
        sorter: (a, b) => a.brand?.length - b.brand?.length,
    },
    {
        title: "Category",
        dataIndex: "category",
        sorter: (a, b) => a.category?.length - b.category?.length,
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

const Productlist = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    const data = [];
    for (let i = 0; i < products?.length; i++) {
        data.push({
            key: i + 1,
            id: products[i]._id,
            title: products[i].title,
            description: products[i].description,
            price: `$${products[i].price}`,
            brand: products[i].brand,
            category: products[i].category,
        });
    }

    return (
        <div className="mt-4">
            <h3 className="mb-4 title">Productlist</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Productlist;
