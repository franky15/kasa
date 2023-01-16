
import DescriptionHidden from "./FonctionDescription"
import EquipementsHidden from "./FonctionEquipements"

 
export default function Description({tableObjet}){ 

    const descriptionTable = []
    const equipementTable = []

    //récupération de la description
    {tableObjet.forEach((item, index) => descriptionTable.push(item.description))}

    //récupération du tableau d'equipements
    {tableObjet.forEach((item, index) => equipementTable.push(item.equipments))}

     return(
        <div className="container">
             
            <div className="sous-container">
                <DescriptionHidden tableObjet = {tableObjet}/>
            </div>
            <div className="sous-container">
                <EquipementsHidden tableObjet = {tableObjet}/>
            </div>
        </div>
     )
}


