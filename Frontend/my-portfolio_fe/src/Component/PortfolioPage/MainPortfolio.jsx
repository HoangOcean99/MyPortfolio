import React, { useState } from "react";
import Projects from "./Projects";
import Certification from "./Certification";
import "./MainPortfolio.css";

export default function MainPortfolio() {
    const [filter, setFilter] = useState("Project");

    return (
        <div className="bg-dark text-light" id="projects">
            <div className="container text-center">
                {/* Portfolio dropdown */}
                <div className="portfolio-dropdown">
                    <button className="portfolio-btn">📂 {filter}</button>
                    <div className="portfolio-submenu">
                        <button
                            className={filter === "Project" ? "btn-active" : ""}
                            onClick={() => setFilter("Project")}
                        >
                            <span>
                                Projects
                            </span>
                        </button>
                        <button
                            className={filter === "Certification" ? "btn-active" : ""}
                            onClick={() => setFilter("Certification")}
                        >
                            <span>
                                Certifications
                            </span>
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
