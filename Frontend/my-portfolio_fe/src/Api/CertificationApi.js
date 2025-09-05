import axios from "axios";

const url = import.meta.env.VITE_APP_API_URL;

export const getCerti = async () => {
    const response = await axios.get(`${url}/certi/getCerti`)
    return response;
}
export const getCertiSecure = async () => {
    const response = await axios.get(`${url}/certi/getCertiSecure`, {
        withCredentials: true,
    })
    return response;
}

export const addCertSecure = async ({ title, file, link }) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("link", link);

    const response = await axios.post(`${url}/certi/addCertiSecure`, formData, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response;
};

export const editCertiSecure = async ({ index, title, file, link }) => {
    const formData = new FormData();
    formData.append("index", index);
    formData.append("file", file);
    formData.append("title", title);
    formData.append("link", link);

    const response = await axios.put(`${url}/certi/editCertiSecure`, formData, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response;
};
export const deleteCertSecure = async (id) => {
    const response = await axios.delete(`${url}/certi/deleteCertiSecure/${id}`, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response;
};