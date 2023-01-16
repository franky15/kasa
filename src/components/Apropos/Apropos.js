
import React from "react";
import "./BannerApropos.scss";
import imgBanner from "../../assets/IMG.png";
import Fiabilite from "./Fiabilite";
import Respect from "./Respect";
import Service from "./Services";
import Responsabilite from "./Responsabilite";


export default function Apropos(){
    
    
    return(
        <div className="containerApropos">
            <div className="bannerApropos">
                <div className="bannerApropos__img"><img src={imgBanner} className="imgBanner" alt="image de la bannière"/></div>
            </div>
            <div className="containerOption">
                <div className="bloc">
                    <Fiabilite />
                    
                </div>
                <div className="bloc">
                    <Respect/>
                </div>
                <div className="bloc">
                    <Service/>
                </div>
                <div className="bloc">
                    <Responsabilite/>
                </div>
            </div>
        </div>
        
    )
}
