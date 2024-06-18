/**
 * MET CS601 - Fianl Term Project
 * Written by Justin Yun
 * KkomiGallery Component
 */

import React, {useState} from "react";
import "../styles/KkomiGallery.css"
import dog_data from "../json/kkomi.json"
import Header from "../parts/Header";
import kk1 from "../img/kkomi/dog1.jpg"
import kk2 from "../img/kkomi/dog2.jpg"
import kk3 from "../img/kkomi/dog3.jpg"
import kk4 from "../img/kkomi/dog4.jpg"
import kk5 from "../img/kkomi/dog5.jpg"
import kk6 from "../img/kkomi/dog6.jpg"
import kk7 from "../img/kkomi/dog7.jpg"
import kk8 from "../img/kkomi/dog8.jpg"
import kk9 from "../img/kkomi/dog9.jpg"
import kk10 from "../img/kkomi/dog10.jpg"
import kk11 from "../img/kkomi/dog11.jpg"
import kk12 from "../img/kkomi/dog12.jpg"

const dog_list = [kk1,kk2,kk3,kk4,kk5,kk6,kk7,kk8,kk9,kk10,kk11,kk12]

function KkomiGallery() {

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
        <div className="gallery-back-dog">

            <Header />
            <h2 className="kkomi-title">Gallery for Kkomi</h2>
            <div className="column-three-grid">
                {dog_data.map(curr_item => (
                    <div className="img-card">
                        <img src={dog_list[`${curr_item.id-1}`]} alt="travel" className="dog-img" onClick={() => itemClick(curr_item)}/>
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
                    <img src={dog_list[showingItem.id-1]} alt="dog" className="full-img"/>
                    
                </div>
            )}
        </div>
    );
}
export default KkomiGallery