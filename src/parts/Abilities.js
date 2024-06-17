/**
 * MET CS601 - Fianl Term Project
 * Written by Justin Yun
 * Abilities Component
 */

import React from "react";
import "../styles/Abilities.css"
import ab1 from "../img/abilities/html5.jpg"
import ab2 from "../img/abilities/css3.jpg"
import ab3 from "../img/abilities/c.jpg"
import ab4 from "../img/abilities/java.jpg"
import ab5 from "../img/abilities/python.jpg"
import ab6 from "../img/abilities/arduino.jpg"

function Abilities() {
    return( 
        <div className="ability">
            <div className="ability-list">
                <img src={ab1} alt="ability" className="ability-img"></img>
                <img src={ab2} alt="ability" className="ability-img"></img>
                <img src={ab3} alt="ability" className="ability-img"></img>
                <img src={ab4} alt="ability" className="ability-img"></img>
                <img src={ab5} alt="ability" className="ability-img"></img>
                <img src={ab6} alt="ability" className="ability-img"></img>
            </div>
            <p className="ability-description">I have a solid foundation in various programming languages and technologies. 
                I am skilled in HTML and CSS, which I use to create and style engaging web pages. 
                My abilities in C and Java enable me to tackle complex programming challenges and develop robust applications. 
                JavaScript is another key area of my knowledge, allowing me to build dynamic and interactive web experiences. 
                Additionally, I have hands-on experience with Arduino, which has enhanced my understanding of hardware-software integration. 
                I am well-equipped with the skills needed to tackle a wide range of technical projects</p>
        </div>
    );
}

export default Abilities