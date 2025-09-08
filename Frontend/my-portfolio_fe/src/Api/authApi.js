import axios from 'axios';

const url = import.meta.env.VITE_API_URL;

export const login = async (email, password) => {
    const response = await axios.post(`${url}/auth/login`, { email, password });
    // Lưu token trong memory hoặc localStorage (portfolio thì dùng localStorage cũng OK)
    localStorage.setItem('token', response.data.token);
    return response.data;
};

export const signout = async () => {
    localStorage.removeItem('token');
};
