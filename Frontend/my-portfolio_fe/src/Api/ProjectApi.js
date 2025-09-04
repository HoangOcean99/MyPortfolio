import axios from "axios";

const url = import.meta.env.VITE_APP_API_URL;

export const getProject = async () => {
    const response = await axios.get(`${url}/projects/getProjects`)
    return response;
}