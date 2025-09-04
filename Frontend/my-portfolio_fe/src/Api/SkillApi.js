import axios from "axios";

const url = import.meta.env.VITE_APP_API_URL;

export const getSkill = async () => {
    const response = await axios.get(`${url}/skills/getSkills`)
    return response;
}