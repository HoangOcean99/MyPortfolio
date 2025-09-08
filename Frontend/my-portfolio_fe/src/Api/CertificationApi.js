import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const getCerti = async () => {
    const response = await axios.get(`${url}/certi/getCerti`)
    return response;
}
// Lấy token từ localStorage (FE lưu khi login)
const getToken = () => localStorage.getItem("token");

export const getCertiSecure = async () => {
    const response = await axios.get(`${url}/certi/getCertiSecure`, {
        headers: { Authorization: `Bearer ${getToken()}` }
    });
    return response;
};

export const addCertSecure = async ({ title, file, link }) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("link", link);

    const response = await axios.post(`${url}/certi/addCertiSecure`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${getToken()}`
        }
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
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response;
};

export const deleteCertSecure = async (id) => {
    const response = await axios.delete(`${url}/certi/deleteCertiSecure/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
    });
    return response;
};