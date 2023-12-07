import { apiPath } from './apiPath.mjs';
import axios from 'axios';

export const postComplaint = async (formData) => {
    const response = await axios.post(`${apiPath}complaint/addComplaint`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    console.log(formData)
    console.log(response.data)
    return response.data;
}

export const getComplaints = async () => {
    const response = await axios.get(`${apiPath}complaint/all`);
    return response.data;
}