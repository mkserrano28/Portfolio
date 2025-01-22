import React from "react";
import "../../css/Hero.css";
import Mak from "../../images/Mak1.png";

const Hero = () => {
    return (
        <div className="Hero">
            <div className="text-container">
                <h1 className="title-name">Mark Serrano</h1>
                <p className="description">
                    I am an Application System Engineer with 2 years and 11 months of experience.
                    I am new to Frontend Development and seeking a Frontend Job.
                </p>
                <a
                    href="/cv/Serrano,Mark_CV.pdf" // Path to the CV file
                    download="Serrano,Mark_CV.pdf" // File name when downloaded
                    aria-label="Download Mark Serrano's CV"
                >
                    <button className="contact-me">Download CV</button>
                </a>
            </div>
            <img src={Mak} alt="Mark Serrano" />
        </div>
    );
};

export default Hero;
