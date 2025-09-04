import axios from "axios";

const url = import.meta.env.VITE_APP_API_URL;

export const getGeneral = async () => {
    const response = await axios.get(`${url}/general/getGeneral`)
    return response;
}