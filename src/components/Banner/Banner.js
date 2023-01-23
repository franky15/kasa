import React from "react";
import "./Banner.scss"
import imgBanner from "../../assets/IMG.png"

export default function Banner(){
    return(
        <div className="banner-bloc">
            <div className="bloc-img"><img src={imgBanner} className="imgBanner" alt=" bannière"/></div>
            <p className="banner-title">Chez vous, partout et ailleurs</p>
        </div>
    )
}