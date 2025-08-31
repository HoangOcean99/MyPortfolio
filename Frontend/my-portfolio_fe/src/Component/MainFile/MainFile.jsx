import React from "react";
import FirstPage from "../FirstPage/FirstPage";
import AboutMe from "../DetailPage/IntroMyself";
import Skills from "../SkillPage/Skills";
import MainPortfolio from "../PortfolioPage/MainPortfolio";
import HeaderHero from "./Header";
import MainContactPage from "../ContactPage/mainContactPage";
import Footer from "../Footer/Footer";

export default function MainFile({toggleTheme, mode}) {
  return (
    <main>
      <HeaderHero toggleTheme={toggleTheme}/>
      <FirstPage mode={mode}/>
      <AboutMe />
      <Skills />
      <MainPortfolio />
      <MainContactPage />
      <Footer />

    </main>
  );
}
