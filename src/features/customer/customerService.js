import axios from "axios";
import { BASE_URL } from "../../utils/base_url";

const getAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`);

    const { data } = response.data;

    return data;
};

const customerService = {
    getAllUsers,
};

export default customerService;
