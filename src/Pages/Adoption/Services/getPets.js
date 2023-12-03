import axios from 'axios';
import { apiPath } from "../../../Services/apiPath.mjs";

export const getAllPets = (pageNumber, searchParam) => {
    return getPets(pageNumber, searchParam);
}
const getPets = async (pageNumber, searchParam) => {
    let query = '';
    (searchParam ? query = `?${searchParam}` : '')
    const response = await axios.get(`${apiPath}pets/filter__${pageNumber}${query}`);
    return response.data;
}

export const getTotalPets = () => {
    return totalPets();
}

const totalPets = async() => {
    const response = await axios.get(`${apiPath}pets/count`);
    return response.data;
}