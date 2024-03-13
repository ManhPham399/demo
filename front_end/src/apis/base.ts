import axios from "axios";
import qs from 'qs'
// tạo ra các đường dẫn URL cơ bản
const NCKHAxiosClient = axios.create({
    //baseURL: "http://127.0.0.1:8000/",
    baseURL: "https://dummyjson.com/products",  // demo
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: (params) => qs.stringify(params),
})

NCKHAxiosClient.interceptors.request.use(async (config) => config);


export { NCKHAxiosClient }