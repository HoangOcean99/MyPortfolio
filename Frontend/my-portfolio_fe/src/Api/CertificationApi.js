import axios from "axios";

const url = import.meta.env.VITE_APP_API_URL;

export const getCerti = async () => {
    const response = await axios.get(`${url}/certi/getCerti`)
    return response;
}