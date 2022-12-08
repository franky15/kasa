import button from "../../assets/button.png"

//import styled from "styled-components"
//import "./Description.css"
//import "./description.scss"

 
export default function Description({tableObjet}){ 

    const descriptionTable = []
    const equipementTable = []

    //récupération de la description
    {tableObjet.forEach((item, index) => descriptionTable.push(item.description))}

    //récupération du tableau d'equipements
    {tableObjet.forEach((item, index) => equipementTable.push(item.equipments))}
    
    //utilisation du styled components
 /*const btn1 = styled.div`
    border: solid blue;
`*/

   

     return(
        <div className="container">
             
        <div className="sous-container">
            <div className="bloc1">
                <p className="bloc1__description">Description</p>
                <div className="bloc1__bouton1">
                    <img  src={button} className="bouton__img"/>
                </div>
            </div>
            <div className="bloc1__on-off1">
                {descriptionTable.map((item, index) =>  <p key={`${index}-${item}`} className="descrip1-img">{item}</p> )}
            </div>
        </div>
        <div className="sous-container">
            <div className="bloc2">
                <p className="bloc2__description">Equipements</p>
                <div className="bloc2__bouton2">
                    <img  src={button} className="bouton__img"/>
                </div>
            </div>
            <div className="bloc2__on-off2">
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