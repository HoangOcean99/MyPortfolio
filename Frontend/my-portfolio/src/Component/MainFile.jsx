import React, { useEffect, useState } from "react";
import HeaderHero from "./Header";
import FirstPage from "./FirstPage/FirstPage";
import AboutMe from "./DetailPage/IntroMyself";


export default function MainFile() {

    return (
        <div className="min-vh-100 vw-100 bg-light" id="home">
            <HeaderHero />
            <FirstPage />
            <AboutMe />
        </div>
    );
}
