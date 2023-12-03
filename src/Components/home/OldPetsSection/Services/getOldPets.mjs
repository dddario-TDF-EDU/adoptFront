import axios from "axios";
import { apiPath } from "../../../../Services/apiPath.mjs";

export const getOldPets = () => {
    return oldPets();
}

const oldPets = async () => {
    const response = await axios.get(`${apiPath}pets/oldPets`);
    return response.data
}