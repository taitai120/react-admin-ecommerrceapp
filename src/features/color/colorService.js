import axios from "axios";
import { BASE_URL } from "../../utils/base_url";

const getAllColors = async () => {
    const response = await axios.get(`${BASE_URL}/colors`);

    const { data } = response.data;

    return data;
};

const colorService = {
    getAllColors,
};

export default colorService;
