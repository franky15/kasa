import button from "../../assets/button.png"

import styled from "styled-components"
import "./Description.css"

export default function Description({tableObjet}){

    const descriptionTable = []
    const equipementTable = []

    //récupération de la description
    {tableObjet.forEach((item, index) => descriptionTable.push(item.description))}

    //récupération du tableau d'equipements
    {tableObjet.forEach((item, index) => equipementTable.push(item.equipments))}
    
    

    //utilisation du styled components
    const titre = styled.h1`
    
    color: blue;
    
    `

     return(
        <titre>je suis testeur</titre>,
        <div className="bloc-description">
             
            <div className="groupe-description">
                <div className="bloc-descriptionTitle">
                    <p className="description-title">Description</p>
                    <div className="bouton-description">
                        <img  src={button} className="img-bouton1"/>
                    </div>
                </div>
                
                <div className="on-off1-description"
                    
                >
                    {descriptionTable.map((item, index) =>  <p key={`${index}-${item}`} className="descrip1-img">{item}</p> )}
                
                </div>
            </div>
            <div className="groupe-description">
                <div className="bloc-descriptionTitle">
                    <p className="description-title">Equipements</p>
                    <div className="bouton-description"><img  src={button} className="img-bouton"/></div>
                </div>
                <div className="on-off2-description">
                    {equipementTable[0].map((item, index )=> <p key={`${index}-${item}`}>{item}</p> )}
                      
                </div>
            </div>
        </div>
     )
}


/*<div className="bouton-description">
                        <crochet></crochet><img  src={button} className="img-bouton1"/></crochet>
                    </div>
*/
/* 
<div className="bloc-description">
    <div className="groupe-description">
        <p className="description"></p>
        <div className="bouton"><img className="img-bouton"/></div>
    </div>
    <div className="groupe-description">
        <p className="description"></p>
        <div className="bouton"><img className="img-bouton"/></div>
    </div>
</div>
*/