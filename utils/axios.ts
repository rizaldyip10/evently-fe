import axios from "axios";

const API_URL = process.env.EVENTLY_BE_URL


export default axios.create({
    baseURL: API_URL
});