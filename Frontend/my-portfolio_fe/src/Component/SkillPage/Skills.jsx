import React, { useState } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp, FaGitAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import './Skills.scss'

import {
    SiJavascript,
    SiTailwindcss,
    SiBootstrap,
    SiTypescript,
    SiMysql,
    SiFirebase,
    SiVite,
    SiKotlin,
    SiNextdotjs,
    SiFigma,
    SiAdobeillustrator,
    SiCanva,
} from "react-icons/si";

const skills = [
    { icon: <FaReact size={40} />, name: "React JS", type: "Framework", group: 1 },
    { icon: <SiNextdotjs size={40} />, name: "Next JS", type: "Framework", group: 1 },
    { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS", type: "Framework", group: 1 },
    { icon: <SiBootstrap size={40} />, name: "Bootstrap", type: "Framework", group: 1 },
    { icon: <SiJavascript size={40} />, name: "JavaScript", type: "Language", group: 1 },
    { icon: <FaNodeJs size={40} />, name: "Node JS", type: "Runtime", group: 1 },
    { icon: <FaGitAlt size={40} />, name: "GitHub", type: "Repository", group: 1 },
    { icon: <SiAdobeillustrator size={40} />, name: "Adobe Illustrator", type: "Design App", group: 1 },
    { icon: <SiCanva size={40} />, name: "Canva", type: "Design App", group: 1 },
    { icon: <SiFigma size={40} />, name: "Figma", type: "Design App", group: 1 },
    { icon: <SiKotlin size={40} />, name: "Kotlin", type: "Language", group: 1 },
    { icon: <SiFirebase size={40} />, name: "Firebase", type: "Framework", group: 1 },
    { icon: <FaHtml5 size={40} />, name: "HTML", type: "Language", group: 1 },
    { icon: <FaCss3Alt size={40} />, name: "CSS", type: "Language", group: 1 },
    { icon: <SiTypescript size={40} />, name: "TypeScript", type: "Language", group: 1 },
    { icon: <FaPhp size={40} />, name: "PHP", type: "Language", group: 1 },
    { icon: <SiVite size={40} />, name: "Vite", type: "Framework", group: 1 },
    { icon: <SiMysql size={40} />, name: "MySQL", type: "Database", group: 1 },
];

export default function Skills() {
    const [filter, setFilter] = useState();

    return (
        <div className="bg-dark text-light py-5">
            <div className="container">
                <h2 className="text-center mb-4 fw-bold">My Skills</h2>
                {/* Nút chọn filter */}
                <div className="d-flex justify-content-center mb-4 gap-2">
                    <div class="d-flex justify-content-center gap-4 flex-wrap">
                        <a class="click-btn btn-style904" data-hover="Click me" href="#"><span>All</span></a>
                        <a class="click-btn btn-style904" data-hover="Click me" href="#"><span>Technical Skills</span></a>
                        <a class="click-btn btn-style904" data-hover="Click me" href="#"><span>Tools</span></a>
                        <a class="click-btn btn-style904" data-hover="Click me" href="#"><span>Soft Skills</span></a>
                    </div>

                </div>
                <div className="row g-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 card-skill-hover">
                            <Tilt
                                glareEnable={true}
                                glareMaxOpacity={0.4}
                                scale={1.05}
                                perspective={1000}
                                className="project-tilt"
                            >
                                <div className="card text-center h-100 border-0 shadow-sm">
                                    <div className="card-body d-flex align-items-center card-skill">
                                        <div className="icon-skill text-light">{skill.icon}</div>
                                        <div className="detail-skill">
                                            <h6 className="card-title fw-bold">{skill.name}</h6>
                                            <p className="card-text text-white-50">{skill.type}</p>
                                        </div>
                                    </div>

                                </div>
                            </Tilt>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

