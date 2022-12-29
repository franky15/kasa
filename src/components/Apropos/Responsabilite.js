import React, {useState} from "react";
import button from "../../assets/button.png";



export default function Responsabilite(){

    let [isOpen, setIsopen] = useState(false);
    let change1 = () => setIsopen(true);
    let change2 = () => setIsopen(false);
   

    return (
        <div>
            { isOpen ? (
                <div >
                    <div className="bloc-elements" onClick={change2}>
                        <p className="bloc-elements__title">Sécurité</p>
                        <div className="bloc-elements__bouton">
                            <img  src={button} className="bouton__img"/>
                        </div>
                    </div>
                    <div className="bloc__contenuFiabilite">
                        <p className="description">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </div>
                </div>
            ) : (
                <div className="bloc-elements" onClick={change1}>
                        <p className="bloc-elements__title">Responsabilité</p>
                        <div className="bloc-elements__bouton">
                            <img  src={button} className="bouton__img"/>
                        </div>
                </div>
            )
            }
        
    </div>
    )
};