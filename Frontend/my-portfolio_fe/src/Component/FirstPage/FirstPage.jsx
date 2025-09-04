import React, { useEffect, useState } from "react";
import CanvasCard from "./CanvasCard";
import './FirstPage.css'
import { getGeneral } from "../../Api/GeneralApi";

export default function FirstPage({ mode }) {
    const [generalInfor, setGeneralInfor] = useState(null);
    useEffect(() => {
        const fetchGeneral = async () => {
            const response = await getGeneral();
            setGeneralInfor(response.data[0]);
        }
        fetchGeneral();
    }, []);

    return (
        <div className="min-vh-50 vw-100" id="Home">

            {/* HERO */}
            <section className="container contain-home">
                <div className="row align-items-center px-5 g-5">
                    {/* Left: text */}

                    <div className="col-md-6 order-2 order-md-1 home-left mt-4">
                        <p class="cursor typewriter-animation">Hello world, I'm</p>
                        <h1 className="fw-bold display-5">
                            <h1 class="wave-text">
                                <span>H</span>
                                <span>O</span>
                                <span>A</span>
                                <span>N</span>
                                <span>G</span>
                                <span className="space">&nbsp;</span>
                                <span>H</span>
                                <span>A</span>
                                <span>I</span>
                                <span className="space">&nbsp;</span>
                                <span>D</span>
                                <span>U</span>
                                <span>O</span>
                                <span>N</span>
                                <span>G</span>
                            </h1>
                        </h1>
                        <h2 className="mt-3 fullstack">
                            Fullstack developer
                        </h2>
                        <div class="marquee">
                            <h2>Welcome to My personal website</h2>
                        </div>


                        {/* Socials */}
                        {generalInfor && <div className="mt-4 d-flex gap-3">
                            <a href={generalInfor.linkCV} target="_blank" rel="noreferrer" className="button-downloadCV">
                                <span>Download CV</span>
                                <span>Download CV</span>
                                <span>Download CV</span>
                                <span>Download CV</span>
                            </a>
                            <a href="https://github.com/HoangOcean99" target="_blank" rel="noreferrer" className="fs-1 button-github">
                                <i className="bi bi-github"></i>
                            </a>
                        </div>}
                    </div>

                    {/* Right: card / avatar */}
                    <div className="col-md-6 order-1 order-md-2 mb-5 mb-md-0 home-right">
                        <CanvasCard mode={mode} />
                        {/* <LanyardCard/> */}
                    </div>
                </div>
            </section>

            <div id="projects" className="" />
            <div id="skills" className="" />
            <div id="contact" className="" />
        </div>
    );
}
