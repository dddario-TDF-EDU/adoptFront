import axios from "axios"
import { apiPath } from "./apiPath.mjs"

export const addNewPet = async(requestData) => {
    const response = await axios.post(`${apiPath}user/addPet` , requestData);
    return response.data;
}