import React from "react";
import HeaderHero from "./Header";
import FirstPage from "./FirstPage/FirstPage";
import AboutMe from "./DetailPage/IntroMyself";
import Skills from "./SkillPage/Skills";
import Projects from "./PortfolioPage/Projects";


export default function MainFile() {
    return (
        <div className="w-100 bg-light">
            <HeaderHero />
            <FirstPage />
            <AboutMe />
            <Skills />
            <Projects />
        </div>
    );
}
