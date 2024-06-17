/**
 * MET CS601 - Fianl Term Project
 * Written by Justin Yun
 * Introduce Component
 */


import React from "react";
import "../styles/Introduce.css"
import intro1 from "../img/introduce.jpg"
function Introduce(){
    return(
        <div className="introduce-div">
            <div className="introduce-image">
                <img src={intro1} alt="introimage" className="intro_img1" />
            </div>
            <div className="introduce-part">
                <h2 className="introduce-title">
                    About Me
                </h2>
                <p className="introduce-description">Hello! My name is <strong>Justin Yun</strong>. 
                I was born in Rhode Island in 1999, and my family moved back to Korea when I was 3 years old. 
                I spent all my school years in Korea, but in 2018, I returned to the United States for college. <br /><br />

                Numbers have always made more sense to me than words, and this affinity led me to the world of computers, 
                where I have found my passion. Pursuing a degree in computer science has been a natural progression of this lifelong interest, 
                and it has been incredibly fulfilling to see how much I have grown and learned in this field. <br/><br/>

                I'm not an outgoing person and often prefer spending time by myself, enjoying the peace and focus it brings. 
                Whether I'm delving into complex programming problems, go biking, or simply relaxing at home with my dog, 
                I find solitude to be a source of strength and creativity. 
                It allows me to concentrate deeply on my interests and projects without distractions.<br/><br/>

                In the near future, I will be fulfilling my mandatory military service in Korea,
                 which is a requirement for all Korean men. This upcoming chapter brings a mix of worry and anticipation. 
                 While I am concerned about the challenges it may present, 
                 I am also curious about the personal growth and new experiences it will bring. 
                 I believe this experience will add a unique perspective to my life and further shape my journey.
                </p>
            </div>
        </div>
    )
}

export default Introduce;