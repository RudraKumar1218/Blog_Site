import axios from "axios";

export const axiosInstance=axios.create({
    baseURL : "https://blog-backend-r0du.onrender.com/api"
})