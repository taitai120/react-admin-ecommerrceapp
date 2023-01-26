import api from "../../utils/apiconfig";

const getAllProducts = async () => {
    const response = await api.get(`products`);

    const { data } = response.data;

    return data;
};

const productService = {
    getAllProducts,
};

export default productService;
