import React, { Component } from "react";
//page components
import AboutSection from "../components/About";
import ExperienceSection from "../components/Experience";
import FaqSection from "../components/Faq"

const AboutMe = () => {
    return(
        <>
        <AboutSection/>,
        <ExperienceSection/>
        <FaqSection/>
        </>
    )
}

export default AboutMe;