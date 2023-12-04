import {apiPath } from '../../../../Services/apiPath.mjs';
import axios from 'axios';

export const postComplaint = async(formData) => {
    const response = await axios.post(`${apiPath}complaint/addComplaint` , formData, {
        headers : {
            "Content-Type" : "multipart/form-data"
        }
    })
    return response.data;
}