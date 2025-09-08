import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const getSkill = async () => {
    const response = await axios.get(`${url}/skills/getSkills`)
    return response;
}
export const getSkillSecure = async () => {
    const response = await axios.get(`${url}/skills/getSkillsSecure`, {
        withCredentials: true,
    })
    return response;
}

export const addSkillSecure = async ({ file, name, type, group }) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("type", type);
    formData.append("group", group);

    const response = await axios.post(`${url}/skills/addSkillsSecure`, formData, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
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
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response;
};

export const deleteSkillSecure = async (id) => {
    const response = await axios.delete(`${url}/skills/deleteSkillsSecure/${id}`, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response;
};
