/**
 * MET CS601 - Fianl Term Project
 * Written by Justin Yun
 * Homepage Component
 */

import React from "react";
import Header from "../parts/Header"
import Welcome from "../parts/Welcome";
import Mainpage from "../parts/Mainpage";
import Footer from "../parts/Footer";

function Homepage() {
    return(
        <div class="homepage">
            <Header />
            <Welcome />
            <Mainpage />
            <Footer />
        </div>
    );
}

export default Homepage;