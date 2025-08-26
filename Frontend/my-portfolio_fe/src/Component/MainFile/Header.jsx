import React, { useEffect, useState } from "react";
import './Header.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";


// Smooth scroll helper
const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function HeaderHero() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4" href="#">My Portfolio</a>

                {/* Button GitHub (luôn hiện bên phải) */}
                <a href="https://github.com/yourprofile" target="_blank" className="btn btn-dark d-lg-none ms-auto button-github">
                    <i className="bi bi-github"></i>
                </a>

                {/* Toggle */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse justify-content-lg-center" id="navbarMenu">
                    <ul className="menu-icons d-flex list-unstyled mx-auto mx-lg-0">
                        <li style={{ "--i": "#a955ff", "--j": "#ea51ff" }}>
                            <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                            <span className="title">Home</span>
                        </li>
                        <li style={{ "--i": "#56CCF2", "--j": "#2F80ED" }}>
                            <span className="icon">
                                <ion-icon name="videocam-outline"></ion-icon>
                            </span>
                            <span className="title">Video</span>
                        </li>
                        <li style={{ "--i": "#FF9966", "--j": "#FF5E62" }}>
                            <span className="icon">
                                <ion-icon name="camera-outline"></ion-icon>
                            </span>
                            <span className="title">Photo</span>
                        </li>
                        <li style={{ "--i": "#80FF72", "--j": "#7EE8FA" }}>
                            <span className="icon">
                                <ion-icon name="share-social-outline"></ion-icon>
                            </span>
                            <span className="title">Share</span>
                        </li>
                        <li style={{ "--i": "#ffa9c6", "--j": "#f434e2" }}>
                            <span className="icon">
                                <ion-icon name="heart-outline"></ion-icon>
                            </span>
                            <span className="title">Like</span>
                        </li>
                    </ul>
                    {/* Button GitHub (chỉ hiện desktop) */}
                    <a href="https://github.com/yourprofile" target="_blank" className="btn btn-dark d-none d-lg-block ms-auto button-github">
                        <i className="bi bi-github"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
}
