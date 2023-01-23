import React,{ useState }  from "react";
import button from "../../assets/button.png";
import {dataAdd} from "../../DataAdd.js";
import "./FonctionDescription.scss"; ///////


export default function DescriptionHidden({tableObjet}){

    const [isOpen, setIsopen] = useState(false);
    let change1 = () => setIsopen(true);
    let change2 = () => setIsopen(false);

   const [estOpen, setEstopen] = useState(false);
    let change3 = () => setEstopen(true);
    let change4 = () => setEstopen(false);



    const descriptionTable = []
    const equipementTable = []

    //récupération de la description
    {tableObjet.forEach((item, index) => descriptionTable.push(item.description))}

    //récupération du tableau d'equipements
    {tableObjet.forEach((item, index) => equipementTable.push(item.equipments))}


    
    const titleDescription = dataAdd.find(data => data.id === "description");
    //récupération du titre description
    const description =  titleDescription.titreDescription;
    console.log(description)

    
    const titleEquipement = dataAdd.find(data => data.id === "equipements")
    //récupération du titre equipements
    const equipement =  titleEquipement.titreEquipements;
    console.log(equipement)
    //const descrip = "description";

    const descripTitre = dataAdd.find((data) => data.id === "description")

    const equipementTitre = dataAdd.find((data) => data.id === "equipements")

    return (
        <div className="container-description">

            <div className="container-description-sousconteneur">

            
            {   descripTitre && 

                isOpen ? (
                    <div >
                        <div className="bloc2" onClick={change2}>
                            <p className="bloc2__description">{description}</p>
                            <div className="bloc2__bouton2">
                                <img  src={button} className="bouton__img change-angle" alt="button"/>
                            </div>
                        </div>
                        <div className="bloc2__on-off2">
                            {descriptionTable.map((item, index) =>  <p key={`${index}-${item}`} className="descrip1-img">{item}</p> )}
                            
                            
                        </div>
                    </div>
                ) : (
                   
                    <div className="bloc2" onClick={change1}>
                        <p className="bloc2__description">{description}</p>
                        <div className="bloc2__bouton2">
                            <img  src={button} className="bouton__img" alt="button"/>
                        </div>
                    </div>
                   
                   
                    )
                
            }
            </div>


            <div className="container-description-sousconteneur">
            {   equipementTitre && 


                estOpen ? (
                    <div >
                        <div className="bloc2" onClick={change4}>
                            <p className="bloc2__description">{equipement}</p>
                            <div className="bloc2__bouton2">
                                <img  src={button} className="bouton__img change-angle" alt="button" />
                            </div>
                        </div>
                        <div className="bloc2__on-off2">
                            {equipementTable[0].map((item, index )=> <p key={`${index}-${item}`}>{item}</p> )}
                            
                        </div>
                    </div>
                ) : (
                
                    <div className="bloc2" onClick={change3}>
                        <p className="bloc2__description">{equipement}</p>
                        <div className="bloc2__bouton2">
                            <img  src={button} className="bouton__img" alt="button" />
                        </div>
                    </div>
                
                
                )

            }
            </div> 
                

            
        </div>
       
    )

}

/*

 {
                isOpen ? (
                    <div >
                        <div className="bloc2" onClick={change2}>
                            <p className="bloc2__description">Description</p>
                            <div className="bloc2__bouton2">
                                <img  src={button} className="bouton__img change-angle" />
                            </div>
                        </div>
                        <div className="bloc2__on-off2">
                            {descriptionTable.map((item, index) =>  <p key={`${index}-${item}`} className="descrip1-img">{item}</p> )}
                            
                            
                        </div>
                    </div>
                ) : (
                   
                    <div className="bloc2" onClick={change1}>
                        <p className="bloc2__description">Description</p>
                        <div className="bloc2__bouton2">
                            <img  src={button} className="bouton__img" />
                        </div>
                    </div>
                   
                   
                )
            }
*/

/*


{ dataAdd.forEach((dataObject) => dataObject.id === "description" &&
                    
                    console.log("bonjour"),////////////////////

                    isOpen ? (

                        <div key={"produit"}>
                            <div className="bloc2" onClick={change2}>
                                <p className="bloc2__description">{description}</p>
                                <div className="bloc2__bouton2">
                                    <img  src={button} className="bouton__img change-angle" />
                                </div>
                            </div>
                            <div className="bloc2__on-off2">
                                {descriptionTable.map((item, index) =>  <p key={`${index}-${item}`} className="descrip1-img">{item}</p> )}
                                
                                
                            </div>
                        </div>
                         ) : (
                    
                        <div className="bloc2" onClick={change1}>
                            <p className="bloc2__description">{description}</p>
                            <div className="bloc2__bouton2">
                                <img  src={button} className="bouton__img" />
                            </div>
                        </div>
                    
                    
                    )
                )}
                
                { dataAdd.forEach((dataObject) => dataObject.id === "equipements" &&

                    console.log("bonsoir"),///////////////////////////

                    isOpen ? (
                        <div  key={"equipements"}>
                            <div className="bloc2" onClick={change2}>
                                <p className="bloc2__description">{equipement}</p>
                                <div className="bloc2__bouton2">
                                    <img  src={button} className="bouton__img change-angle"  />
                                </div>
                            </div>
                            <div className="bloc2__on-off2">
                                {equipementTable[0].map((item, index )=> <p key={`${index}-${item}`}>{item}</p> )}
                                
                            </div>
                        </div>
                    ) : (
                    
                        <div className="bloc2" onClick={change1}>
                            <p className="bloc2__description">{equipement}</p>
                            <div className="bloc2__bouton2">
                                <img  src={button} className="bouton__img" />
                            </div>
                        </div>
                    
                    
                    )
                )}

*/