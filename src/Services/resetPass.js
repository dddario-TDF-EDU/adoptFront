import axios from "axios"
import { apiPath } from "./apiPath.mjs"

export const resetPassword = async (password, token) => {
    try {
        const response = await axios.patch(`${apiPath}user/password/edit?reset_password_token=${token}`, password);
        return response.data;
    }
    catch (error) {
        throw new Error(error);
    }
}