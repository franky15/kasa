import React from "react";
import "./BannerApropos.scss"
import button from "../../assets/button.png"
import imgBanner from "../../assets/IMG.png"

export default function Apropos(){
    return(
        <div className="containerApropos">
            <div className="bannerApropos">
                <div className="bannerApropos__img"><img src={imgBanner} className="imgBanner" alt="image de la bannière"/></div>
            </div>
            <div className="containerOption">
                <div className="bloc">
                    <div className="blocFiabilite">
                        <p className="blocFiabilite__title">Fiabilité</p>
                        <div className="blocFiabilite__bouton">
                            <img  src={button} className="bouton__img"/>
                        </div>
                    </div>
                    <div className="bloc__contenuFiabilite">
                        <p className="description">notre fiabilité</p>
                    </div>
                </div>
                <div className="bloc">
                    <div className="blocRespect">
                        <p className="blocRespect__title">Respect </p>
                        <div className="blocRespect__bouton">
                            <img  src={button} className="bouton__img"/>
                        </div>
                    </div>
                    <div className="bloc__contenuRespect">
                        <div className="description">
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement 
                            discriminatoire ou de perturbation du voisinage entrainera une exclusion de 
                            notre plateforme.</p>
                        </div>
                    </div>
                </div>
                <div className="bloc">
                    <div className="blocService">
                        <p className="blocService__title">Service</p>
                        <div className="blocService__bouton">
                            <img  src={button} className="bouton__img"/>
                        </div>
                    </div>
                    <div className="bloc__contenuService">
                        <p className="description">nos services</p>
                    </div>
                </div>
                <div className="bloc">
                    <div className="blocResponsabilite">
                        <p className="blocResponsabilite__title">Responsabilité</p>
                        <div className="blocResponsabilite__bouton">
                            <img  src={button} className="bouton__img"/>
                        </div>
                    </div>
                    <div className="bloc__contenuResponsabilite">
                        <p className="description">nos responsabilités</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
