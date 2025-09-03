import React, { useState } from "react";
import Projects from "./Projects";
import Certification from "./Certification";
import "./MainPortfolio.css";
import "./projectButton.scss";

export default function MainPortfolio() {
    const [filter, setFilter] = useState("Project");

    return (
        <div className="text-light" id="Projects" style={{ minHeight: '700px' }}>
            <div className="container text-center">
                {/* Portfolio dropdown */}
                <div className="portfolio-dropdown">
                    <a href="#" className="btn-flip portfolio-btn" data-back="Select" data-front={filter}></a>

                    {/* 2 dây nối */}
                    <div className="lineProject line1"></div>
                    <div className="lineProject line2"></div>

                    <div className="portfolio-submenu">
                        <button
                            className={filter === "Project" ? "btn-active" : ""}
                            onClick={() => setFilter("Project")}
                        >
                            <span>Projects</span>
                        </button>
                        <button
                            className={filter === "Certification" ? "btn-active" : ""}
                            onClick={() => setFilter("Certification")}
                        >
                            <span>Certifications</span>
                        </button>
                    </div>
                </div>


                {/* Nội dung */}
                <div className="mt-5 py-5">
                    {filter === "Project" && <Projects />}
                    {filter === "Certification" && <Certification />}
                </div>
            </div>
        </div>
    );
}
