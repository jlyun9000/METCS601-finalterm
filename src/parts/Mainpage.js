/**
 * MET CS601 - Fianl Term Project
 * Written by Justin Yun
 * Mainpage Component
 */

import React, {useState} from "react";
import { Link } from 'react-router-dom';
import "../styles/Mainpage.css";
import datas from "../json/datas.json";

import Introduce from "./Introduce";
import Abilities from "./Abilities";

import img1_1 from "../img/mainpage/about2.jpg"

import img2_1 from "../img/mainpage/education1.jpg";

import img3_1 from "../img/mainpage/ability1.jpg";
import img3_2 from "../img/mainpage/ability2.jpg";
import img3_3 from "../img/mainpage/ability3.jpg";

import img4_1 from "../img/mainpage/interest1.jpg";
import img4_2 from "../img/mainpage/interest2.jpg";
import img4_3 from "../img/mainpage/interest3.jpg";

import img5_1 from "../img/travel/gal1.jpg";
import img5_2 from "../img/travel/gal9.jpg";

import img6_1 from "../img/kkomi/dog0.jpg";
import img6_2 from "../img/kkomi/dog2.jpg";
import img6_3 from "../img/kkomi/dog3.jpg";
import img6_4 from "../img/kkomi/dog4.jpg";



const title_img_list = [img1_1, img2_1, img3_1, img4_1, img5_1, img6_1];
const img_slide = [[],
[img2_1],
[img3_1,img3_2,img3_3],
[img4_1,img4_2,img4_3],
[img5_1,img5_2],
[img6_2,img6_3,img6_4]
]
function LinkGrid() {

    const [showingItem, setShowingItem] = useState(null);
    const [showSlide, setShowSlide] = useState(0);
    const [animationName, setAnimationName] = useState("")

    
    const itemClick = (item) =>{
        setShowingItem(item);
        setShowSlide(0);
        setAnimationName("imgOn")
    } 

    const goBackClick = () => {
        setShowingItem(null);
    }
////////////////////////////////
    const movePlus = (len) =>{
        setShowSlide(num => (num+1) % len);
    }

    const moveMinus = (len) =>{
        setShowSlide(num => (num+len-1) % len);
    }

    return(
        <div className="links-grid" id='others'>
            <h2 className="description-title">Click to Explore More Into My Story</h2>

            <div className="items-grid">
                {datas.map(curr_item=>(
                    <div className="items" onClick={() => itemClick(curr_item)}>
                        <h2 className="item-title">{curr_item.name}</h2>
                        <img src={title_img_list[`${curr_item.id-1}`]} alt="img" className="img-show" />
                    </div>
                ))}
            </div>
            
            {showingItem && (    
                <div className={`description-page ${animationName}`}>
                    <div className="exit-icon" onClick={goBackClick}>
                        <span class="material-symbols-outlined">
                            close
                        </span>
                    </div>
                    {showingItem.id === 1 ? <Introduce /> :
                    <div className="description" >
                        <h2 className="description-title">{showingItem.name}</h2>
                        <div className="slides">
                            {img_slide[showingItem.id-1].length !== 1 ?
                                <button className="moving left" onClick={()=>moveMinus(img_slide[showingItem.id-1].length)}>&#10094;</button> :
                                <p className="noting-nothing-nothing"></p>
                            }

                            <img src={img_slide[showingItem.id-1][showSlide]} alt="tour" className="link-slide-img" />


                            {img_slide[showingItem.id-1].length !== 1 ?
                                <button className="moving right" onClick={()=>movePlus(img_slide[showingItem.id-1].length)}>&#10095;</button> :
                                <p className="noting-nothing-nothing"></p>
                            }
                        </div>

                        {showingItem.id === 3 ?
                        <Abilities />:
                        <p className="description-part">{showingItem.description}</p>}
                        

                        {showingItem.linkto !== "" ? 

                        <Link to={`${showingItem.linkto}`}>
                            <button className="go-detail">
                                Click for Photos <span className="show-arrow"></span>
                            </button>
                        </Link> :
                        <p className="noting-nothing-nothing"></p>}

                    </div>
                    }
                </div>
)}
            
            

        </div>
    )
}

export default LinkGrid