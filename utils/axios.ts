import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_URL


export default axios.create({
    baseURL: API_URL,
    withCredentials: true
});