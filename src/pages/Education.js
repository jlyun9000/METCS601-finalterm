/**
 * MET CS601 - Fianl Term Project
 * Written by Justin Yun
 * Education Component
 */

import React from "react";
import "../styles/Education.css"
import koreaSchool from "../img/school/koreahighschool.jpg"
import school1 from "../img/school/uwmilwaukee.jpg"
import school2 from "../img/school/uwmadison.jpg"
import school3 from "../img/school/boston.jpg"
import Header from "../parts/Header"
function Education() {

    const uwm = "https://uwm.edu/"
    const uw = "https://www.wisc.edu/"
    const bu = "https://www.bu.edu/"
    const korea ="https://banpo.sen.hs.kr/"
    return(
        <div id="education">
            <Header />
            
            <div className="education-list">
                <h1 className="edu-title">Schools Attended</h1>
                <p>Click logo to visit each school's website</p>
                <div className="each-school">
                    <img src={school3} alt="bu" onClick={()=>{window.open(bu)}} className="school-img" />
                    <div className="school-description">
                        <h3>Boston University</h3>
                        <p>MS in Computer Information System</p>
                        <p>2023-Present</p>
                    </div>
                </div>
                <div className="each-school">
                    <img src={school2} alt="uw" onClick={()=>{window.open(uw)}} className="school-img" />
                    <div className="school-description">
                        <h3>UW Madison</h3>
                        <p>BA in Computer Science</p>
                        <p>2020-2022 </p>
                    </div>
                </div>
                <div className="each-school">
                    <img src={school1} alt="uwm" onClick={()=>{window.open(uwm)}} className="school-img" />
                    <div className="school-description">
                        <h3>UW Milwaukee</h3>
                        <p>2018-2020</p>
                    </div>
                </div>
                <div className="each-school">
                    <img src={koreaSchool} alt="highschool" onClick={()=>{window.open(korea)}} className="school-img" />
                    <div className="school-description">
                        <h3>High School (Korea)</h3>
                        <p>2016-2018</p>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Education;