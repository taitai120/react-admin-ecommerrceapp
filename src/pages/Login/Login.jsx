import React, { useEffect } from "react";
import CustomInputs from "../../components/CustomInputs/CustomInputs";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { login } from "../../features/auth/authSlice";
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
    password: yup.string().required("Password is required"),
});

const Login = () => {
    const dispatch = useDispatch();
    const { user, isLoading, isSuccess, isError, message } = useSelector(
        (state) => state.auth
    );
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(login(values));
        },
    });

    useEffect(() => {
        if (!user === null || isSuccess) {
            navigate("admin");
        } else {
            // alert("not login");
        }
    }, [user, isLoading, isSuccess, isError, message]);

    return (
        <div
            className="py-5"
            style={{ background: "#ffd333", minHeight: "100vh" }}
        >
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
                <h3 className="text-center">Login</h3>
                <p className="text-center">
                    Log in to your account to continue.
                </p>
                <form onSubmit={formik.handleSubmit}>
                    <CustomInputs
                        type="text"
                        label="Email Address"
                        i_id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="formik-error">
                            {formik.errors.email}
                        </div>
                    ) : null}

                    <CustomInputs
                        type="password"
                        label="Password"
                        i_id="pass"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange("password")}
                        onBlur={formik.handleBlur("password")}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className="formik-error">
                            {formik.errors.password}
                        </div>
                    ) : null}

                    <div className="mb-3 d-flex justify-content-between align-items-center">
                        <div>
                            <input
                                type="checkbox"
                                id="rememberme"
                                className="me-2"
                            />
                            <label htmlFor="rememberme">Remember me</label>
                        </div>
                        <Link
                            to="/forgot-password"
                            className="text-decoration-none"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                    <button
                        className="border-0 px-3 py-2 text-center text-white text-decoration-none fw-bold fs-5 w-100"
                        style={{ background: "#ffd333" }}
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
