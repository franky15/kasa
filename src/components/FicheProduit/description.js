
import DescriptionHidden from "./FonctionDescription"
//import EquipementsHidden from "./FonctionEquipements"

 
export default function Description({tableObjet}){ 

   

     return(
        <div className="container">
             
            <div className="sous-container">
                <DescriptionHidden tableObjet = {tableObjet}/>
            </div>
            
        </div>
     )
}

/*
<div className="sous-container">
    <DescriptionHidden tableObjet = {tableObjet}/>
</div>
<div className="sous-container">
    <EquipementsHidden tableObjet = {tableObjet}/>
</div>
*/
