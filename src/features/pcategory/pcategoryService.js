import api from "../../utils/apiconfig";

const getAllProductCategories = async () => {
    const response = await api.get(`categories`);

    const { data } = response.data;

    return data;
};

const pcategoryService = {
    getAllProductCategories,
};

export default pcategoryService;
