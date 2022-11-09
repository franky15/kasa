import button from "../../assets/button.png"
import "./Description.css"

export default function Description({tableObjet}){
    const descriptionTable = []
    const equipementTable = []

    //récupération de la description
    {tableObjet.forEach((item, index) => descriptionTable.push(item.description))}

    //récupération du tableau d'equipements
    {tableObjet.forEach((item, index) => equipementTable.push(item.equipments))}
    //console.log(equipementTable)
    //console.log(descriptionTable)

     return(
        <div className="bloc-description">
            <div className="groupe-description">
                <p className="description">Description</p>
                <div className="bouton"><img  src={button} className="img-bouton"/></div>
                <div className="on-off1">
                    {descriptionTable.map((item, index) =>  <p key={`{index}-{item}`}>{item}</p> )}
                
                </div>
            </div>
            <div className="groupe-description">
                <p className="description">Description</p>
                <div className="bouton"><img  src={button} className="img-bouton"/></div>
                <div className="on-off2">
                    {equipementTable.map((item, index )=> <p key={`{index}-{item}`}>{item}</p> )}
                      
                </div>
            </div>
        </div>
     )
}

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