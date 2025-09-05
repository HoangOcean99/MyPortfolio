import { Navigate } from "react-router-dom";

export const Protected = ({ children }) => {
    const isLogin = localStorage.getItem('isLogin');

    if (!isLogin) {
        return <Navigate to={'/admin-login'} replace />
    }
    return children;
} 