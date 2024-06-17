import React from "react";
import "../styles/Resume.css"
import Header from "../parts/Header";
import resume_pg1 from "../img/resume1.png"
import resume_pg2 from "../img/resume2.png"
function Resume(){
    return(
        <div className="resume-box">
            <Header />
            <img src={resume_pg1} alt="resume" className="resume-img"/>
            <img src={resume_pg2} alt="resume" className="resume-img"/>
        </div>
    )
}

export default Resume;