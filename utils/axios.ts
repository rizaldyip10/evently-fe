import axios from "axios";

const API_URL = process.env.EVENTLY_BE_URL || 'http://localhost:8080/api/v1'


export default axios.create({
    baseURL: API_URL,
    withCredentials: true
});