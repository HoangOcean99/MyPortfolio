import React, { useEffect, useState } from "react";
import LanyardCard from "./FirstPage/StudentCardLanyard";

// Smooth scroll helper
const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const navItems = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Projects", target: "projects" },
    { label: "Skills", target: "skills" },
    { label: "Contact", target: "contact" },
];

export default function HeaderHero() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="vw-100 bg-light" style={{zIndex: 999}} id="header">
            {/* NAVBAR */}
            <nav
                className={`navbar navbar-expand-md fixed-top ${scrolled ? "bg-white shadow-sm" : "bg-white"
                    }`}
            >
                <div className="container">
                    {/* Logo / Name */}
                    <a
                        className="navbar-brand fw-bold"
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToId("home");
                        }}
                    >
                        Ocean
                    </a>

                    {/* Mobile toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menu */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {navItems.map((item) => (
                                <li className="nav-item" key={item.target}>
                                    <a
                                        href={`#${item.target}`}
                                        className="nav-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToId(item.target);
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                            <li className="nav-item ms-2">
                                <a
                                    href="#contact"
                                    className="btn btn-dark text-white px-3"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToId("contact");
                                    }}
                                >
                                    Liên hệ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
