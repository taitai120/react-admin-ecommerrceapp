import axios from "axios";
import { BASE_URL } from "../../utils/base_url";

const getAllBlogs = async () => {
    const response = await axios.get(`${BASE_URL}/blogs`);

    const { data } = response.data;

    return data;
};

const blogService = {
    getAllBlogs,
};

export default blogService;
