import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css"; // import file css riêng
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}`);
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
                        <button type="submit" className="btn btn-primary w-100 login-btn mb-2" onClick={() => navigate('/dashboard')}>
                            Login
                        </button>
                        <button type="button" className="btn btn-secondary w-100 login-btn" onClick={() => navigate('/')}>
                            Back
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
