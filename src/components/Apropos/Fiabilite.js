import React, {useState} from "react";
import button from "../../assets/button.png";



export default function Fiabilite(){

    let [isOpen, setIsopen] = useState(false);
    let change1 = () => setIsopen(true);
    let change2 = () => setIsopen(false);
   

    return (
        <div>
            { isOpen ? (
                <div >
                    <div className="bloc-elements" onClick={change2}>
                        <p className="bloc-elements__title">Fiabilité</p>
                        <div className="bloc-elements__bouton">
                            <img  src={button} className="bouton__img"/>
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
                            <img  src={button} className="bouton__img"/>
                        </div>
                </div>
            )
            }
        
    </div>
    )
};