import React, { useEffect, useState } from "react";
import './Header.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";


// Smooth scroll helper
const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function HeaderHero({ toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const textButtonDarkMode = ['⛅ Close Dark Mode', '🌙 Open Dark Mode'];
    const [indexDarkMode, setIndexDarkMode] = useState(0);

    const onClickSelectMode = () => {
        setIndexDarkMode((indexDarkMode === 0) ? 1 : 0);
        toggleTheme();
    }

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4" href="#">Ocean's Portfolio</a>

                <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="btn d-lg-none ms-auto button-settings"
                >
                    <ion-icon name="settings-outline"></ion-icon>
                </button>
                {showSettings && (
                    <div className="settings-box shadow p-3 rounded bg-light position-absolute end-0 mt-5 me-5" style={{ width: "200px" }}>
                        <h6 className="mb-2">⚙ Settings</h6>
                        <hr className="my-2" />
                        <button
                            onClick={() => onClickSelectMode()}
                            className="btn btn-sm btn-outline-dark w-100 mb-2"
                        >
                            {textButtonDarkMode[indexDarkMode]}
                        </button>
                        <select className="form-select form-select-sm">
                            <option value="en">English</option>
                            <option value="vi">Tiếng Việt</option>
                        </select>
                        <button
                            className="btn btn-sm btn-outline-dark w-100 mt-2"
                        >
                            Go to dashboard
                        </button>
                    </div>
                )}


                {/* Toggle */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse justify-content-lg-center" id="navbarMenu">
                    <ul className="menu-icons d-flex list-unstyled mx-auto mx-lg-0">
                        <li style={{ "--i": "#8a6aff", "--j": "#5c00b3" }} className="li-header">
                            <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                            <span className="title">Home</span>
                        </li>
                        <li style={{ "--i": "#2e7d32", "--j": "#064a1f" }} className="li-header">
                            <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                            <span className="title">About Me</span>
                        </li>
                        <li style={{ "--i": "#d68933", "--j": "#b35c00" }} className="li-header">
                            <span className="icon"><ion-icon name="bulb-outline"></ion-icon></span>
                            <span className="title">My Skills</span>
                        </li>
                        <li style={{ "--i": "#2196f3", "--j": "#01579b" }} className="li-header">
                            <span className="icon"><ion-icon name="briefcase-outline"></ion-icon></span>
                            <span className="title">My Projects</span>
                        </li>
                        <li style={{ "--i": "#c2185b", "--j": "#880e4f" }} className="li-header">
                            <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                            <span className="title">Contact</span>
                        </li>
                    </ul>



                    <button
                        onClick={() => setShowSettings(!showSettings)}
                        className="btn ms-auto button-settings d-none d-lg-block">
                        <ion-icon name="settings-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </nav>
    );
}
