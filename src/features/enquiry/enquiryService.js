import axios from "axios";
import { BASE_URL } from "../../utils/base_url";

const getAllEnquiries = async () => {
    const response = await axios.get(`${BASE_URL}/enquiries`);

    const { data } = response.data;

    return data;
};

const enquiryService = {
    getAllEnquiries,
};

export default enquiryService;
