import React, { useEffect } from "react";
import "./Brandlist.scss";
import { Button, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getAllBrands } from "../../../../features/brand/brandSlice";

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
                <Link to={`/brand/${record.id}`}>
                    <BiEdit className="fs-3" />
                </Link>
                <Link>
                    <AiFillDelete className="ms-3 text-danger fs-3" />
                </Link>
            </Space>
        ),
    },
];

const Brandlist = () => {
    const dispatch = useDispatch();
    const { brands } = useSelector((state) => state.brand);

    useEffect(() => {
        dispatch(getAllBrands());
    }, []);

    const data = [];
    for (let i = 0; i < brands.length; i++) {
        data.push({
            key: i + 1,
            title: brands[i].title,
        });
    }

    return (
        <div className="mt-4">
            <h3 className="mb-4 title">Brandlist</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Brandlist;
