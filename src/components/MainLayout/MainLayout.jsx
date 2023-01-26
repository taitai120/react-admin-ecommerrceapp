import React, { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import "./MainLayout.scss";
import {
    AiOutlineDashboard,
    AiOutlineShoppingCart,
    AiOutlineUser,
    AiOutlineBgColors,
} from "react-icons/ai";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";

import { useNavigate, Outlet, Link } from "react-router-dom";
import user from "../../assets/images/taitai.png";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} width={250}>
                <div className="logo">
                    <h2 className="text-white text-center fs-5 py-3 mb-0">
                        <div className="sm-logo">TaiTai</div>
                        <div className="lg-logo">Taitai Store</div>
                    </h2>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[""]}
                    onClick={({ key }) => {
                        if (key === "signout") {
                        } else {
                            navigate(key);
                        }
                    }}
                    items={[
                        {
                            key: "",
                            icon: <AiOutlineDashboard className="fs-4" />,
                            label: "Dashboard",
                        },
                        {
                            key: "customers",
                            icon: <AiOutlineUser className="fs-4" />,
                            label: "Customers",
                        },
                        {
                            key: "catalog",
                            icon: <AiOutlineDashboard className="fs-4" />,
                            label: "Catalog",
                            children: [
                                {
                                    key: "add-product",
                                    icon: (
                                        <AiOutlineShoppingCart className="fs-4" />
                                    ),
                                    label: "Add Product",
                                },
                                {
                                    key: "product-list",
                                    icon: (
                                        <AiOutlineShoppingCart className="fs-4" />
                                    ),
                                    label: "Product List",
                                },
                                {
                                    key: "brand",
                                    icon: <SiBrandfolder className="fs-4" />,
                                    label: "Brand",
                                },
                                {
                                    key: "brand-list",
                                    icon: <SiBrandfolder className="fs-4" />,
                                    label: "Brand List",
                                },
                                {
                                    key: "category",
                                    icon: <BiCategoryAlt className="fs-4" />,
                                    label: "Category",
                                },
                                {
                                    key: "category-list",
                                    icon: <BiCategoryAlt className="fs-4" />,
                                    label: "Category List",
                                },
                                {
                                    key: "color",
                                    icon: (
                                        <AiOutlineBgColors className="fs-4" />
                                    ),
                                    label: "Color",
                                },
                                {
                                    key: "color-list",
                                    icon: (
                                        <AiOutlineBgColors className="fs-4" />
                                    ),
                                    label: "Color List",
                                },
                            ],
                        },
                        {
                            key: "orders",
                            icon: <FaClipboardList className="fs-4" />,
                            label: "Orders",
                        },
                        {
                            key: "blogs",
                            icon: <FaBloggerB className="fs-4" />,
                            label: "Blogs",
                            children: [
                                {
                                    key: "blog",
                                    icon: <ImBlog className="fs-4" />,
                                    label: "Add Blog",
                                },
                                {
                                    key: "blog-list",
                                    icon: <FaBloggerB className="fs-4" />,
                                    label: "Blog List",
                                },
                                {
                                    key: "blog-category",
                                    icon: <ImBlog className="fs-4" />,
                                    label: "Add Blog Category",
                                },
                                {
                                    key: "blog-category-list",
                                    icon: <FaBloggerB className="fs-4" />,
                                    label: "Blog Category List",
                                },
                            ],
                        },
                        {
                            key: "enquiries",
                            icon: <FaClipboardList className="fs-4" />,
                            label: "Enquires",
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="d-flex justify-content-between ps-1 pe-5"
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: () => setCollapsed(!collapsed),
                        }
                    )}
                    <div className="d-flex gap-4 align-items-center">
                        <div className="position-relative">
                            <IoIosNotifications className="fs-4" />
                            <span className="badge bg-warning rounded-circle p-1 position-absolute notification">
                                3
                            </span>
                        </div>
                        <div className="d-flex gap-3 align-items-center dropdown">
                            <div>
                                <img
                                    src={user}
                                    alt=""
                                    style={{
                                        width: "32px",
                                        height: "32px",
                                        borderRadius: "50%",
                                    }}
                                />
                            </div>
                            <div
                                role="button"
                                id="dropdownMenuLink"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <h5>TaiTai</h5>
                                <p>phantuantai7293@gmail.com</p>
                            </div>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink"
                            >
                                <li>
                                    <Link
                                        className="dropdown-item py-1 mb-1"
                                        style={{
                                            height: "auto",
                                            lineHeight: "20px",
                                        }}
                                        to="/"
                                    >
                                        View Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item py-1 mb-1"
                                        style={{
                                            height: "auto",
                                            lineHeight: "20px",
                                        }}
                                        to="/"
                                    >
                                        Signout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <main>
                        <Outlet />
                    </main>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
