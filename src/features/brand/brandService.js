import api from "../../utils/apiconfig";

const getAllBrands = async () => {
    const response = await api.get(`brands`);

    const { data } = response.data;

    return data;
};

const brandService = {
    getAllBrands,
};

export default brandService;
