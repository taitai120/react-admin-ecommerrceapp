import axios from "axios";
import { BASE_URL, TOKEN } from "./base_url";

const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use(
    (config) => {
        config.headers = {
            ...config.headers,

            Authorization: TOKEN ? `Bearer ${TOKEN}` : null,
            Accept: "application/json",
        };

        return config;
    },
    (errors) => {
        return Promise.reject(errors);
    }
);

export default api;
