import React,{ useState }  from "react";
import button from "../../assets/button.png"



export default function EquipementsHidden({tableObjet}){

    const [isOpen, setIsopen] = useState(false);
    let change1 = () => setIsopen(true);
    let change2 = () => setIsopen(false);

    const descriptionTable = []
    const equipementTable = []

    //récupération de la description
    {tableObjet.forEach((item, index) => descriptionTable.push(item.description))}

    //récupération du tableau d'equipements
    {tableObjet.forEach((item, index) => equipementTable.push(item.equipments))}

    return (
        <div>

            {
                isOpen ? (
                    <div >
                        <div className="bloc2" onClick={change2}>
                            <p className="bloc2__description">Equipements</p>
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
                        <p className="bloc2__description">Equipements</p>
                        <div className="bloc2__bouton2">
                            <img  src={button} className="bouton__img" />
                        </div>
                    </div>
                   
                   
                )
            }
        </div>
       
    )

}