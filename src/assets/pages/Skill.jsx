import React from "react";
import "../../css/Skill.css";
import skill from '../../data/skill.json'
import Mak1 from "../../images/Mak1.png";


const Skill = () => {
    const skillArry = skill;
    return (
        <div className="body-container">
            <img src={Mak1} alt="Mark Serrano" className="img-skill" />
            <div className="skill-container">
                <h1 className="skill-title">Skills</h1>
                {skillArry.map((skill) =>
                    <div key={skill.id} className="skill-box">
                        <span className="skill-name">{skill.skillname}</span>
                        <div className="skill-bar">
                            <span
                                className="skill-per"
                                style={{ width: skill.percent }}
                            >
                                <span className="tooltip">{skill.percent}</span>
                            </span>
                        </div>
                    </div>
                )}
                <a
                    href="/re/Serrano,Mark1_CV.pdf" // Path to the CV file
                    download="Serrano,Mark1_CV.pdf" // File name when downloaded
                    aria-label="Download Mark Serrano's CV"
                >
                </a>
            </div>
        </div>
    )
}
export default Skill