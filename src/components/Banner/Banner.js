import React from "react";
import "./Banner.css"
import imgBanner from "../../assets/IMG.png"

export default function Banner(){
    return(
        <div className="banner-bloc">
            <div className="bloc-img"><img src={imgBanner} className="imgBanner" alt="image de la bannière"/></div>
            <p className="banner-title">Chez vous, partout et ailleurs</p>
        </div>
    )
}