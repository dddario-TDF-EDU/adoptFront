import {apiPath } from '../../../../Services/apiPath.mjs';
import axios from 'axios';

export const getPostComplaint = async(formData) => {
    return postComplaint(formData) 
}

const postComplaint = async(formData) => {
    const response = await axios.post(`${apiPath}complaints/addComplaint` , formData, {
        headers : {
            "Content-Type" : "multipart/form-data"
        }
    })
    return response.data;
}