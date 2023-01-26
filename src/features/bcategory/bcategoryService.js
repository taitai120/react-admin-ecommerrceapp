import axios from "axios";
import { BASE_URL } from "../../utils/base_url";

const getAllBlogCategories = async () => {
    const response = await axios.get(`${BASE_URL}/blogcategories`);

    const { data } = response.data;

    return data;
};

const bcategoryService = {
    getAllBlogCategories,
};

export default bcategoryService;
