import star from "../../assets/star.png"
import "./Etoiles.scss"

export default function EtoilesProduit({tableObjet}){ 

    
    var note = 0 ;
    
   //const allTag = [];
   const notes = []

     {tableObjet.forEach((star) => (notes.push(star.rating)))}
    
    //conversion de la note en entier
   {notes.forEach(valeur => ( note = parseInt(valeur) ))}
   

   //tableau d'etoiles
   const noteImg = Array(5).fill(star)
   const noteBack = Array(5).fill(star)
    
    return(
            <div className="all-star">
                {noteImg.slice(5 - note ).map((itemp,index) => 
                    
                    <span key={`${index += 1}-${itemp}`} ><img src={itemp} className="img-star" alt="etoile" /></span>
                    
                )}
                 
                {noteBack.slice(note ).map((itempColor,index) => 
                     <span key={`${itempColor}-${index += 2}`}><img src={itempColor} className="img-star2" alt="etoile" /></span>
                )}
                
            </div>
       
    )
}


