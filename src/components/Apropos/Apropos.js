
import React from "react";
import "./BannerApropos.scss";
import imgBanner from "../../assets/BackgroundApropos.png";

/*
import Fiabilite from "./Fiabilite";
import Respect from "./Respect";
import Service from "./Services";
import Responsabilite from "./Responsabilite";
*/


import {useState} from "react";
import button from "../../assets/button.png";


export default function Apropos(){

    //useState de la fiabilité
    let [isOpenFiabilite, setIsopen] = useState(false);
    let change1 = () => setIsopen(true);
    let change2 = () => setIsopen(false);

    //useState de Respect
    let [isOpenRespect, setRespectopen] = useState(false);
    let change3 = () => setRespectopen(true); 
    let change4 = () => setRespectopen(false);

    //useState des services
    let [isOpenService, setServiceopen] = useState(false);
    let change5 = () => setServiceopen(true); 
    let change6 = () => setServiceopen(false);

    //useState des Responsabilités
    let [isOpenResponsabilite, setResponsabiliteopen] = useState(false);
    let change7 = () => setResponsabiliteopen(true); 
    let change8 = () => setResponsabiliteopen(false);

    

    
    
    return(
        <div className="containerApropos">
            <div className="bannerApropos">
                <div className="bannerApropos__img"><img src={imgBanner} className="imgBanner" alt="background de la bannière"/></div>
            </div>
            <div className="containerOption">
                <div className="bloc">
                    
                    { isOpenFiabilite ? (
                        <div >
                            <div className="bloc-elements" onClick={change2}>
                                <p className="bloc-elements__title">Fiabilité</p>
                                <div className="bloc-elements__bouton">
                                    <img  src={button} className="bouton__img change-angle" alt="button" />
                                </div>
                            </div>
                            <div className="bloc__contenuFiabilite">
                                <p className="description">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                            </div>
                        </div>
                        ) : (
                            <div className="bloc-elements" onClick={change1}>
                                    <p className="bloc-elements__title">Fiabilité</p>
                                    <div className="bloc-elements__bouton">
                                        <img  src={button} className="bouton__img" alt="button" />
                                    </div>
                            </div>
                        )
                    }
                    
                </div>


                <div className="bloc">
                    
                    { isOpenRespect ? (
                <div >
                    <div className="bloc-elements" onClick={change4}>
                        <p className="bloc-elements__title">Respect</p>
                        <div className="bloc-elements__bouton">
                            <img  src={button} className="bouton__img change-angle" alt="button" />
                        </div>
                    </div>
                    <div className="bloc__contenuFiabilite">
                        <p className="description">La bienveillance fait partie des valeurs
                         fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation
                          du voisinage entrainera une exclusion de notre plateforme.</p>
                    </div>
                </div>
            ) : (
                <div className="bloc-elements" onClick={change3}>
                        <p className="bloc-elements__title">Respect</p>
                        <div className="bloc-elements__bouton">
                            <img  src={button} className="bouton__img" alt="button"/>
                        </div>
                </div>
            )


            }
                </div>
                <div className="bloc">
                { isOpenService ? (
                <div >
                    <div className="bloc-elements" onClick={change6}>
                        <p className="bloc-elements__title">Service</p>
                        <div className="bloc-elements__bouton">
                            <img  src={button} className="bouton__img change-angle" alt="button"/>
                        </div>
                    </div>
                    <div className="bloc__contenuFiabilite">
                        <p className="description">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div>
                </div>
            ) : (
                <div className="bloc-elements" onClick={change5}>
                        <p className="bloc-elements__title">Service</p>
                        <div className="bloc-elements__bouton">
                            <img  src={button} className="bouton__img" alt="button"/>
                        </div>
                </div>
            )


            }
                </div>
                <div className="bloc">
                { isOpenResponsabilite ? (
                <div >
                    <div className="bloc-elements" onClick={change8}>
                        <p className="bloc-elements__title">Sécurité</p>
                        <div className="bloc-elements__bouton">
                            <img  src={button} className="bouton__img change-angle" alt="button" />
                        </div>
                    </div>
                    <div className="bloc__contenuFiabilite">
                        <p className="description">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </div>
                </div>
            ) : (
                <div className="bloc-elements" onClick={change7}>
                        <p className="bloc-elements__title">Sécurité</p>
                        <div className="bloc-elements__bouton">
                            <img  src={button} className="bouton__img" alt="button"/>
                        </div>
                </div> 
            )
            }
                </div>
            </div>
        </div>
        
    )
}


/*
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

*/