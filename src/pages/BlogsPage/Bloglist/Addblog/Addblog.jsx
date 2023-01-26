import React, { useState, useEffect } from "react";
import CustomInputs from "../../../../components/CustomInputs/CustomInputs";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Addblog.scss";
import { message, Upload } from "antd";
import { AiOutlineInbox } from "react-icons/ai";

const { Dragger } = Upload;

const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
        const { status } = info.file;
        if (status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (status === "done") {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log("Dropped files", e.dataTransfer.files);
    },
};

const Addblog = () => {
    const [desc, setDesc] = useState("");

    const changeDesc = (newDesc) => {
        setDesc(newDesc);
    };

    return (
        <div>
            <h3 className="mb-4 title">Add Blog</h3>
            <div className="">
                <form action="">
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <AiOutlineInbox className="fs-5" />
                        </p>
                        <p className="ant-upload-text">
                            Click or drag file to this area to upload
                        </p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly
                            prohibit from uploading company data or other band
                            files
                        </p>
                    </Dragger>
                    <div className="mt-3">
                        <CustomInputs type="text" label="Enter Blog Title" />
                    </div>
                    <select name="" id="" className="form-control mb-3">
                        <option value="">Select Blog Category</option>
                    </select>
                    <ReactQuill
                        them="snow"
                        value={desc}
                        onChange={(e) => changeDesc(e)}
                        style={{ height: "500px" }}
                    />
                    <button
                        className="btn btn-success border-0 rounded-3 my-5"
                        type="submit"
                    >
                        Add Blog
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addblog;
