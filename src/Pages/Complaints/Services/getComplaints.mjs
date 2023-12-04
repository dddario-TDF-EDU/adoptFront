import { apiPath } from "../../../Services/apiPath.mjs";
import axios from "axios";


export const getComplaints = async() => {
    const response = await axios.get(`${apiPath}complaint/all`);
    console.log(response.data)
    return response.data;
}