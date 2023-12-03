import { apiPath } from "../../../Services/apiPath.mjs";
import axios from "axios";


export const getComplaints = () => {
    return complaints();
}

const complaints = async() => {
    const response = await axios.get(`${apiPath}complaints/all`);
    return response.data;
}