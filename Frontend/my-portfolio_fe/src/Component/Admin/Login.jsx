import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css"; // import file css riêng
import { useNavigate } from "react-router-dom";
import { login } from "../../Api/authApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(email, password);
            console.log(response);

            // Lấy data từ response
            const data = response.data;

            if (data.message === 'Login successful') {
                localStorage.setItem('isLogin', 'true');
                navigate('/dashboard');
            }
        } catch (error) {
            console.log(error);
            toast.error("You aren't my handsome admin. Return PORTFOLIO, please!");
        }
    };


    return (
        <>
            <div className="login-container">
                <div className="login-card col-11 col-sm-9 col-md-7 col-lg-5 col-xl-4">
                    {/* Responsive width bằng bootstrap grid */}
                    <h3 className="login-title">Admin Dashboard</h3>
                    <form onSubmit={handleSubmit}>
                        {/* Email */}
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Username</label>
                            <div className="input-group">
                                <span className="input-group-text bg-light">
                                    <FaUser />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Password</label>
                            <div className="input-group">
                                <span className="input-group-text bg-light">
                                    <FaLock />
                                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <button type="submit" className="btn btn-primary w-100 login-btn mb-2">
                            Login
                        </button>
                        <button type="button" className="btn btn-secondary w-100 login-btn" onClick={() => navigate('/')}>
                            Back
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{ zIndex: '999' }}
            />
        </>
    );
}
