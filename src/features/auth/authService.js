import api from "../../utils/apiconfig";

// const authenticated = localStorage.getItem("user")
//     ? JSON.parse(localStorage.getItem("user"))
//     : null;

// const config = {
//     headers: {
//         Authorization: `Bearer ${authenticated?.token}`,
//         Accept: "application/json",
//     },
// };

const login = async (userData) => {
    const response = await api.post(`users/admin-login`, userData);
    const { data } = response.data;

    if (data) {
        localStorage.setItem("user", JSON.stringify(data));

        return data;
    }
};

const getAllOrders = async () => {
    const response = await api.get(`users/orders/get-orders`);

    const { data } = response.data;

    return data;
};

const authService = {
    login,
    getAllOrders,
};

export default authService;
