//import star from "../../assets/star.png"
import "./Tag.scss"

export default function TagProduit({tableObjet}){

    const allTag = [];
    //const notes = []
    //var note = 0 ;

    {tableObjet.forEach((itemp) => (allTag.push(itemp.tags)))}
    console.log(allTag[0])

     //{tableObjet.forEach((star) => (notes.push(star.rating)))}
    
    //conversion de la note en entier
    //{notes.forEach(valeur => ( note = parseInt(valeur) ))}
   

   //tableau d'etoiles
   /*
   const noteImg = Array(5).fill(star)
   const noteBack = Array(5).fill(star)*/
    
    return(
        
        <div className="bloc-all-tag">
            <div className="all-tag">
                
                {allTag[0].map((itemTags, index) => (
                    <div className="oneTag" key={`${itemTags}-${index}`}>
                         {itemTags} 
                    </div>
                    
                ))}
            </div>
           
        </div>

    )
}


/*

<div className="bloc-all-tag">
            <div className="all-tag">
                
                {allTag[0].map((itemTags, index) => (
                    <div className="oneTag" key={`${index}-${itemTags}`}>
                         {itemTags} 
                    </div>
                    
                ))}
            </div>
            <div className="all-star">
                {noteImg.slice(5 - note ).map((itemp,index) => 
                    
                    <span><img src={itemp} className="img-star" alt="etoile" key={`${index}-${itemp}`}/></span>
                    
                )}
                 
                {noteBack.slice(note ).map((itempColor,index) => 
                     <span><img src={itempColor} className="img-star2" alt="etoile" key={`${index}-${itempColor}`}/></span>
                )}
                
              
                
            </div>
        </div>



*/