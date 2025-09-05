import axios from "axios";

const url = import.meta.env.VITE_APP_API_URL;

export const getGeneral = async () => {
    const response = await axios.get(`${url}/general/getGeneral`)
    return response;
}
export const getGeneralSecure = async () => {
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