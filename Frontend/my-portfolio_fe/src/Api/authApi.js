import axios from 'axios';

const url = import.meta.env.APP_API_URL;

export const login = async (email, password) => {
    const response = await axios.post(`${url}/auth/login`, {
        email: email,
        password: password
    }, {
        withCredentials: true
    })
    return response;
}

export const signout = async () => {
    const response = await axios.post(`${url}/auth/logout`, {}, {
        withCredentials: true
    })
    return response;
}