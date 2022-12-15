
import React from "react"; //{useState}
import "./BannerApropos.scss";
import button from "../../assets/button.png";
import imgBanner from "../../assets/IMG.png";
import Fiabilite from "./Fiabilite";
import Respect from "./Respect";
import Service from "./Services";
import Responsabilite from "./Responsabilite";


export default function Apropos(){
    
    /*
    <div className="blocFiabilite">
                        <p className="blocFiabilite__title">Fiabilité</p>
                        <div className="blocFiabilite__bouton">
                            <img  src={button} className="bouton__img"/>
                        </div>
                    </div>
                    <div className="bloc__contenuFiabilite">
                        <p className="description">notre fiabilité</p>
                    </div>
    */
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
