import axios from "axios";

const url = import.meta.env.VITE_API_URL;
const getToken = () => localStorage.getItem("token");

// API public
export const getSkill = async () => {
    const response = await axios.get(`${url}/skills/getSkills`);
    return response;
};

// API secure
export const getSkillSecure = async () => {
    const response = await axios.get(`${url}/skills/getSkillsSecure`, {
        headers: { Authorization: `Bearer ${getToken()}` }
    });
    return response;
};

export const addSkillSecure = async ({ file, name, type, group }) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("type", type);
    formData.append("group", group);

    const response = await axios.post(`${url}/skills/addSkillsSecure`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response;
};

export const editSkillSecure = async ({ index, file, name, type, group }) => {
    const formData = new FormData();
    formData.append("index", index);
    formData.append("file", file);
    formData.append("name", name);
    formData.append("type", type);
    formData.append("group", group);

    const response = await axios.put(`${url}/skills/editSkillsSecure`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response;
};

export const deleteSkillSecure = async (id) => {
    const response = await axios.delete(`${url}/skills/deleteSkillsSecure/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
    });
    return response;
};
