import React, { useEffect, useState } from "react";
import './Skills.scss'
import imageUser from '../../assets/AnhMyself.jpg'
import { getSkill } from "../../Api/SkillApi";
import AnimateOnScroll from "../../Utils/AnimateOnScroll";

export default function Skills() {
    const [skills, setSkills] = useState([]);
    // const [filter, setFilter] = useState();
    const [groupSkills, setGroupSkills] = useState(1);

    useEffect(() => {
        const fetchSkill = async () => {
            const response = await getSkill();
            setSkills(response.data);
        }
        fetchSkill();
    }, [])

    return (
        <div className="contain-skills" id="Skills">
            <div className="text-light py-5">
                <div className="container">
                    <AnimateOnScroll animation={'animate__zoomInDown'}>
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
                    </AnimateOnScroll>
                    <AnimateOnScroll animation={'animate__fadeInUpBig'} duration="1.7s">
                        <div className="row g-4">
                            {skills.length > 0 && skills.filter(object => object.groupSkill === groupSkills).map((skill, index) => (
                                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 card-skill-hover">
                                    <div className="text-center h-100 border-0 shadow-sm">
                                        <div className="card-body d-flex align-items-center card-skill">
                                            <div className="icon-skill text-light"><img src={skill.image} /></div>
                                            <div className="detail-skill">
                                                <h6 className="card-title fw-bold">{skill.nameSkill}</h6>
                                                <p className="card-text">{skill.typeSkill}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </div>
    );
};

