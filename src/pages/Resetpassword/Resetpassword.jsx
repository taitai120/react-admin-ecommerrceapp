import React from "react";
import CustomInputs from "../../components/CustomInputs/CustomInputs";

const Resetpassword = () => {
    return (
        <div
            className="py-5"
            style={{ background: "#ffd333", minHeight: "100vh" }}
        >
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-5">
                <h3 className="text-center">Reset Pasword</h3>
                <p className="text-center">
                    Please complete your new password.
                </p>
                <form action="">
                    <CustomInputs
                        type="password"
                        label="New Password"
                        i_id="pass"
                    />
                    <CustomInputs
                        type="password"
                        label="Confirm Password"
                        i_id="confirmpass"
                    />
                    <button
                        className="w-100 border-0 px-3 py-2 text-white fw-bold rounded-3"
                        style={{ background: "#ffd333" }}
                        type="submit"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Resetpassword;
