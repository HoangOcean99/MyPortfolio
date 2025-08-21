import React, { useEffect, useState } from "react";
import LanyardCard from "./StudentCardLanyard";
import CanvasCard from "./CanvasCard";
import '../../Decoration/FirstPage/FirstPage.css'

export default function FirstPage() {

    return (
        <div className="min-vh-100 vw-100" id="home">

            {/* HERO */}
            <section className="container contain-home">
                <div className="row align-items-center px-5 g-5">
                    {/* Left: text */}
                    <div className="col-md-6 order-2 order-md-1 home-left mt-4">
                        <h3 className="text-muted mt-3">
                            Hello world, I'm
                        </h3>
                        <h1 className="fw-bold display-5">Hoang Hai Duong</h1>
                        <h2 className="text-muted mt-3">
                            Fullstack developer
                        </h2>
                        <h4 className="text-muted mt-3">
                            Welcome to My personal website
                        </h4>

                        {/* Socials */}
                        <div className="mt-4 d-flex gap-3">
                            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-dark fs-4">
                                <i className="bi bi-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-primary fs-4">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToId("contact");
                                }}
                                className="text-danger fs-4"
                            >
                                <i className="bi bi-envelope-fill"></i>
                            </a>
                        </div>
                    </div>

                    {/* Right: card / avatar */}
                    <div className="col-md-6 order-1 order-md-2 mb-5 mb-md-0 home-right">
                        <CanvasCard />
                        {/* <LanyardCard/> */}
                    </div>
                </div>
            </section>

            {/* Placeholders for anchors so navbar links work during demo */}
            <div id="about" className="" />
            <div id="projects" className="" />
            <div id="skills" className="" />
            <div id="contact" className="" />
        </div>
    );
}
