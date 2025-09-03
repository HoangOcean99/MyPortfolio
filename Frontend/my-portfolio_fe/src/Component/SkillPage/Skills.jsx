import React, { useState } from "react";
import './Skills.scss'
import imageUser from '../../assets/AnhMyself.jpg'




export default function Skills() {
    const skills = [
        { image: imageUser, name: "React JS", type: "Framework", group: 1 },
        { image: imageUser, name: "Next JS", type: "Framework", group: 1 },
        { image: imageUser, name: "Tailwind CSS", type: "Framework", group: 1 },
        { image: imageUser, name: "Bootstrap", type: "Framework", group: 1 },
        { image: imageUser, name: "JavaScript", type: "Language", group: 1 },
    ];
    const [filter, setFilter] = useState();
    const [groupSkills, setGroupSkills] = useState(1);


    return (
        <div className="contain-skills" id="Skills">
            <div className="text-light py-5">
                <div className="container">
                    <h2 className="text-center mb-4 fw-bold my-skills-title">My Skills</h2>
                    {/* Nút chọn filter */}
                    <div className="d-flex justify-content-center mb-4 gap-2">
                        <div className="d-flex justify-content-center gap-4 flex-wrap">
                            <a
                                className="click-btn btn-style904"
                                data-hover="Click me"
                                onClick={() => {
                                    setGroupSkills(1);
                                    e.preventDefault();
                                }}
                            ><span>Technical Skills</span></a>
                            <a
                                className="click-btn btn-style904"
                                data-hover="Click me"
                                onClick={() => {
                                    setGroupSkills(2);
                                    e.preventDefault();
                                }}
                            ><span>Tools</span></a>
                            <a
                                className="click-btn btn-style904"
                                data-hover="Click me"
                                onClick={() => {
                                    setGroupSkills(3);
                                    e.preventDefault();
                                }}
                            ><span>Soft Skills</span></a>
                        </div>

                    </div>
                    <div className="row g-4">
                        {skills.filter(object => object.group === groupSkills).map((skill, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 card-skill-hover">
                                <div className="text-center h-100 border-0 shadow-sm">
                                    <div className="card-body d-flex align-items-center card-skill">
                                        <div className="icon-skill text-light"><img src={skill.image} /></div>
                                        <div className="detail-skill">
                                            <h6 className="card-title fw-bold">{skill.name}</h6>
                                            <p className="card-text">{skill.type}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

