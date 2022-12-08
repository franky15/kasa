import React from "react";
import imgFooter from "../../assets/LOGOFOOTER.png"
import copywrite from "../../assets/copywrite.png"
import "./Footer.scss"


export default function Footer(){
    return(
        <div className="bloc-footer">
            <div className="logo"><img src={imgFooter} className="imgFooter" alt="logo footer"/></div>
            <div className="logocopywrite"><img src={copywrite} className="copywrite" alt="logo copywrite"/></div>
        </div>
    )
}