import React, { useEffect } from "react";
import "./Orders.scss";
import { Button, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getAllOrders } from "../../../features/auth/authSlice";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    // {
    //     title: "Title",
    //     dataIndex: "title",
    // },
    // {
    //     title: "Description",
    //     dataIndex: "description",
    // },

    // {
    //     title: "Category",
    //     dataIndex: "category",
    // },
    // {
    //     title: "Image",
    //     dataIndex: "images",
    // },
    // {
    //     title: "Brand",
    //     dataIndex: "brand",
    // },
    // {
    //     title: "Ratings",
    //     dataIndex: "totalRatings",
    // },
    // {
    //     title: "Stock",
    //     dataIndex: "stock",
    // },
    // {
    //     title: "Quantity",
    //     dataIndex: "quantity",
    // },
    // {
    //     title: "Price",
    //     dataIndex: "price",
    // },
    // {
    //     title: "Colors",
    //     dataIndex: "color",
    // },
    // {
    //     title: "Status",
    //     dataIndex: "status",
    //     render: (_, record) => (
    //         <>
    //             <select name="" id="" className="form-control form-select">
    //                 <option value="">Set Status</option>
    //                 <option defaultValue={record.orderStatus}>
    //                     {record.orderStatus}
    //                 </option>
    //             </select>
    //         </>
    //     ),
    // },
    {
        title: "Email",
        dataIndex: "orderBy",
    },
    {
        title: "Products",
        dataIndex: "products",
        render: (_, record) =>
            record.products.map((product, i) => {
                if (i !== 0) {
                    return (
                        <span key={product.product._id}>
                            , {product.product.title}
                        </span>
                    );
                }
                return (
                    <span key={product.product._id}>
                        {product.product.title}
                    </span>
                );
            }),
    },
    {
        title: "Payment",
        dataIndex: "payment",
    },
    {
        title: "Amount",
        dataIndex: "amount",
    },
    {
        title: "Created",
        dataIndex: "created",
    },
    {
        title: "Updated",
        dataIndex: "updated",
    },
    {
        title: "Status",
        dataIndex: "status",
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

const Orders = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getAllOrders());
    }, []);

    const data = [];
    for (let i = 0; i < orders?.length; i++) {
        data.push({
            key: i + 1,
            orderBy: orders[i].orderBy.email,
            products: orders[i].products,
            payment: orders[i].paymentIntent.method,
            amount: orders[i].paymentIntent.amount,
            created: new Date(orders[i].createdAt).toLocaleString(),
            updated: new Date(orders[i].updatedAt).toLocaleString(),
            status: orders[i].orderStatus,
        });
    }

    return (
        <div className="mt-4">
            <h3 className="mb-4">Orders</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Orders;
