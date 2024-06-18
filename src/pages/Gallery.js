/**
 * MET CS601 - Fianl Term Project
 * Written by Justin Yun
 * Gallery Component
 */

import React, {useState} from "react";
import "../styles/Gallery.css";

import gallery_data from "../json/gallery.json"
import Header from "../parts/Header";
import travel1 from "../img/travel/gal1.jpg";
import travel2 from "../img/travel/gal2.jpg";
import travel3 from "../img/travel/gal3.jpg";
import travel4 from "../img/travel/gal4.jpg";
import travel5 from "../img/travel/gal5.jpg";
import travel6 from "../img/travel/gal6.jpg";
import travel7 from "../img/travel/gal7.jpg"
import travel8 from "../img/travel/gal8.jpg"
import travel9 from "../img/travel/gal9.jpg"
import travel10 from "../img/travel/gal10.jpg"
import travel11 from "../img/travel/gal11.jpg"
import travel12 from "../img/travel/gal12.jpg"

const gallery_list = [travel1, travel2, travel3, travel4, travel5, travel6, travel7, travel8, travel9, travel10,travel11,travel12]
function Gallery() {
    const [showingItem, setShowingItem] = useState(null);
    const [animationName, setAnimationName] = useState("")

    
    const itemClick = (item) =>{
        setShowingItem(item);
        setAnimationName("imgOn")
    } 

    const goBackClick = () => {
        setShowingItem(null)
    }

    return( 
        <div className="gallery-back">

            <Header />
            <h2 className="gallery-title">My Gallery</h2>
            <div className="column-three-grid">
                {gallery_data.map(curr_item => (
                    <div className="img-card">
                        <img src={gallery_list[`${curr_item.id-1}`]} alt="images" className="travel-img" onClick={() => itemClick(curr_item)}/>
                    </div>
                ))}
            </div>
            {showingItem && (
                <div className={`img-full-show ${animationName}`}>
                    <div className="exit-icon-gallery" onClick={goBackClick}>
                        <span class="material-symbols-outlined">
                            close
                        </span>
                    </div>
                    <img src={gallery_list[showingItem.id-1]} alt="images-big" className="full-img"/>
                    <p className="img-description">{showingItem.description}</p>
                    
                </div>
            )}
        </div>
    );
}

export default Gallery;