import axios from "axios";
import { apiPath } from "../../Services/apiPath.mjs";

export const loginServices = async (userData) => {
    const response = await axios.post(`${apiPath}auth/login`, userData);
    return response.data;
}
export const registerServices = async(userData) => {
    const response = await axios.post(`${apiPath}auth/register`, userData);
    return response.data;
}