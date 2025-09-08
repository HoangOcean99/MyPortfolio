import axios from "axios";

const url = import.meta.env.VITE_API_URL;
// Lấy token từ localStorage
const getToken = () => localStorage.getItem("token");

export const getGeneral = async () => {
    const response = await axios.get(`${url}/general/getGeneral`)
    return response;
}
// API secure
export const getGeneralSecure = async () => {
    const response = await axios.get(`${url}/general/getGeneralSecure`, {
        headers: { Authorization: `Bearer ${getToken()}` }
    });
    return response;
};

export const editGeneralSecure = async (linkCV, years, projects, gpa) => {
    const response = await axios.put(
        `${url}/general/editGeneral`,
        { linkCV, years, projects, gpa },
        { headers: { Authorization: `Bearer ${getToken()}` } }
    );
    return response;
};

export const addContactSecure = async ({ fullname, email, message }) => {
    const response = await axios.post(`${url}/general/addContact`, {
        fullname: fullname,
        email: email,
        message: message
    })
    return response;
}