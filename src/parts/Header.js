/**
 * MET CS601 - Fianl Term Project
 * Written by Justin Yun
 * Header Component
 */

import React from "react";
import logo from "../img/logo.jpg"
import "../styles/Header.css"
import { Link } from "react-router-dom"

function Header(){

    return(
        <div className="homepage-header">
            <div className="whole-header">
                <p className="logo-box">
                    <Link to="/" className="logo-title"><img src={logo} alt="logo" className="logo"/> Justin's Website </Link>
                </p>

                <li className="header-item">
                    <Link to="/" className="link-to">
                        Home
                    </Link>
                    <Link to="/education" className="link-to">
                        Education
                    </Link>
                    <Link to="/gallery" className="link-to">
                        Gallery
                    </Link>
                    <Link to="/kkomi" className="link-to">
                        Kkomi's Gallary
                    </Link>
                </li>
            </div>
        </div>
    )
}

export default Header;