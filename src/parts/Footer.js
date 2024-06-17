/**
 * MET CS601 - Fianl Term Project
 * Written by Justin Yun
 * Footer Component
 */

import React from "react";
import "../styles/Footer.css"
import { Link } from "react-router-dom";

function Footer() {
    const resume = "https://drive.google.com/file/d/1Hq4j5X2Z9z9r8tVnd06g87_Lmfyh0A6v/view"
    const github = "https://github.com/jlyun9000"
    return(
        <div class="footer-div">
            <div className="Footer-box">
                <div className="Footer-contact">
                    <h2>Quick Navigation</h2>
                    <Link to="/education" className="footer-link-to">
                        Education
                    </Link>
                    <Link to="/gallary" className="footer-link-to">
                        Gallary
                    </Link>
                    <Link to="/kkomi" className="footer-link-to">
                        Kkomi's Gallary
                    </Link>
                </div>
                <div className="Footer-contact">
                    <h2>Contact</h2>
                    <a href="mailto: jlyun@bu.edu" className="footer-link-to">
                        <span class="material-symbols-outlined"> mail</span>
                        Mail
                    </a>
                    <a href="tel:+11234567890" className="footer-link-to">
                        <span class="material-symbols-outlined">call</span>
                        Phone
                    </a>
                </div>
                <div className="Footer-contact">
                    <h2>Others</h2>
                    <p onClick={()=>{window.open(github)}} className="footer-link-to"> <i class="fa">&#xf09b;</i> </p>
                    <p onClick={()=>{window.open(resume)}} className="footer-link-to"> Resume </p>
                </div>
            </div>
            <div className="Footer-contact">Copytight &#169; 2024 Justin Yun All rights reseverd</div>
        </div>
    )
}

export default Footer;