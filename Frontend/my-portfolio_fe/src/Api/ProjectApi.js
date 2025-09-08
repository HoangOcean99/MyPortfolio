import axios from "axios";

const url = import.meta.env.VITE_API_URL;

// Lấy token từ localStorage
const getToken = () => localStorage.getItem("token");

// API public
export const getProject = async () => {
    const response = await axios.get(`${url}/projects/getProjects`);
    return response;
};

// API secure
export const getProjectSecure = async () => {
    const response = await axios.get(`${url}/projects/getProjectsSecure`, {
        headers: { Authorization: `Bearer ${getToken()}` }
    });
    return response;
};

export const addProjectSecure = async (projectData) => {
    const formData = new FormData();
    for (const key in projectData) {
        if (Array.isArray(projectData[key])) {
            formData.append(key, JSON.stringify(projectData[key]));
        } else {
            formData.append(key, projectData[key]);
        }
    }

    const response = await axios.post(`${url}/projects/addProjectsSecure`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response;
};

export const editProjectSecure = async (projectData) => {
    const formData = new FormData();
    for (const key in projectData) {
        if (Array.isArray(projectData[key])) {
            formData.append(key, JSON.stringify(projectData[key]));
        } else {
            formData.append(key, projectData[key]);
        }
    }

    const response = await axios.put(`${url}/projects/editProjectsSecure`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response;
};

export const deleteProjectSecure = async (id) => {
    const response = await axios.delete(`${url}/projects/deleteProjectsSecure/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
    });
    return response;
};
