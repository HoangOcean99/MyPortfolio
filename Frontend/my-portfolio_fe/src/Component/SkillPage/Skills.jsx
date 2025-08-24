import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp, FaGitAlt } from "react-icons/fa";
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
    { icon: <FaReact size={40} />, name: "React JS", type: "Framework" },
    { icon: <SiNextdotjs size={40} />, name: "Next JS", type: "Framework" },
    { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS", type: "Framework" },
    { icon: <SiBootstrap size={40} />, name: "Bootstrap", type: "Framework" },
    { icon: <SiJavascript size={40} />, name: "JavaScript", type: "Language" },
    { icon: <FaNodeJs size={40} />, name: "Node JS", type: "Runtime" },
    { icon: <FaGitAlt size={40} />, name: "GitHub", type: "Repository" },
    { icon: <SiAdobeillustrator size={40} />, name: "Adobe Illustrator", type: "Design App" },
    { icon: <SiCanva size={40} />, name: "Canva", type: "Design App" },
    { icon: <SiFigma size={40} />, name: "Figma", type: "Design App" },
    { icon: <SiKotlin size={40} />, name: "Kotlin", type: "Language" },
    { icon: <SiFirebase size={40} />, name: "Firebase", type: "Framework" },
    { icon: <FaHtml5 size={40} />, name: "HTML", type: "Language" },
    { icon: <FaCss3Alt size={40} />, name: "CSS", type: "Language" },
    { icon: <SiTypescript size={40} />, name: "TypeScript", type: "Language" },
    { icon: <FaPhp size={40} />, name: "PHP", type: "Language" },
    { icon: <SiVite size={40} />, name: "Vite", type: "Framework" },
    { icon: <SiMysql size={40} />, name: "MySQL", type: "Database" },
];

export default function Skills() {
    return (
        <div className="bg-dark text-light py-5">
            <div className="container">
                <h2 className="text-center mb-4 fw-bold">My Skills</h2>
                <div className="row g-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card text-center bg-secondary h-100 border-0 shadow-sm">
                                <div className="row card-body d-flex align-items-center ">
                                    <div className=" text-light col-6 col-md-4">{skill.icon}</div>
                                    <div className="col-6 col-md-8">
                                        <h6 className="card-title fw-bold">{skill.name}</h6>
                                        <p className="card-text text-white-50">{skill.type}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

