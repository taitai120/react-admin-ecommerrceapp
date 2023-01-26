import React, { useEffect } from "react";
import "./Colorlist.scss";
import { Button, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getAllColors } from "../../../../features/color/colorSlice";

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
                <Link to={`/color/${record.id}`}>
                    <BiEdit className="fs-3" />
                </Link>
                <Link>
                    <AiFillDelete className="ms-3 text-danger fs-3" />
                </Link>
            </Space>
        ),
    },
];

const Colorlist = () => {
    const dispatch = useDispatch();
    const { colors } = useSelector((state) => state.color);

    useEffect(() => {
        dispatch(getAllColors());
    }, []);

    const data = [];
    for (let i = 0; i < colors.length; i++) {
        data.push({
            key: i + 1,
            title: colors[i].title,
        });
    }

    return (
        <div className="mt-4">
            <h3 className="mb-4 title">Colorlist</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Colorlist;
