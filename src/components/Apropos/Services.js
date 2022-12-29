import React, {useState} from "react";
import button from "../../assets/button.png";



export default function Service(){

    let [isOpen, setIsopen] = useState(false);
    let change1 = () => setIsopen(true);
    let change2 = () => setIsopen(false);
   

    return (
        <div>
            { isOpen ? (
                <div >
                    <div className="bloc-elements" onClick={change2}>
                        <p className="bloc-elements__title">Service</p>
                        <div className="bloc-elements__bouton">
                            <img  src={button} className="bouton__img"/>
                        </div>
                    </div>
                    <div className="bloc__contenuFiabilite">
                        <p className="description">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div>
                </div>
            ) : (
                <div className="bloc-elements" onClick={change1}>
                        <p className="bloc-elements__title">Service</p>
                        <div className="bloc-elements__bouton">
                            <img  src={button} className="bouton__img"/>
                        </div>
                </div>
            )
            }
        
    </div>
    )
};