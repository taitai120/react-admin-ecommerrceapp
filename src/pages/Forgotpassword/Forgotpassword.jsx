import React from "react";
import CustomInputs from "../../components/CustomInputs/CustomInputs";

const Forgotpassword = () => {
    return (
        <div
            className="py-5"
            style={{ background: "#ffd333", minHeight: "100vh" }}
        >
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-5">
                <h3 className="text-center">Forgot Pasword</h3>
                <p className="text-center">
                    Please enter your register email to get reset password
                    email.
                </p>
                <form action="">
                    <CustomInputs
                        type="email"
                        label="Email Address"
                        i_id="email"
                    />
                    <button
                        className="w-100 border-0 px-3 py-2 text-white fw-bold rounded-3"
                        style={{ background: "#ffd333" }}
                        type="submit"
                    >
                        Send Link
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Forgotpassword;
