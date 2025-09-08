import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const getGeneral = async () => {
    const response = await axios.get(`${url}/general/getGeneral`)
    return response;
}
export const getGeneralSecure = async () => {
    console.log('url', url) 
    const response = await axios.get(`${url}/general/getGeneralSecure`, {
        withCredentials: true,
    })
    return response;
}

export const editGeneralSecure = async (linkCV, years, projects, gpa) => {
    const response = await axios.put(`${url}/general/editGeneral`, {
        linkCV: linkCV,
        years: years,
        projects: projects,
        gpa: gpa
    }, {
        withCredentials: true,
    })
    return response;
}

export const addContactSecure = async ({ fullname, email, message }) => {
    const response = await axios.post(`${url}/general/addContact`, {
        fullname: fullname,
        email: email,
        message: message
    })
    return response;
}