import star from "../../assets/star.png"
import "./Tag.css"

export default function TagProduit({tableObjet}){

    const tag = [];
    const notes = []
    var note = 0 ;
    {tableObjet.forEach((itemp) => (tag.push(itemp.tags)))}
     {tableObjet.forEach((star) => (notes.push(star.rating)))}
    
    //conversion de la note en entier
    {notes.forEach(valeur => ( note = parseInt(valeur) ))}
   

   //tableau d'etoiles
   const noteImg = Array(5).fill(star)
   const noteBack = Array(5).fill(star)
    
    return(
        
        <div>
            <div className="all-tag">
                
                {tag.map((tags, index) => (
                    <div className="oneTag" key={`{index}-{tags}`}>{tags}</div>
                    
                ))}
            </div>
            <div className="all-star">
                {noteImg.slice(5 - note ).map((itemp,index) => 
                    
                    <span><img src={itemp} className="img-star" alt="etoile" key={`{index}-{itemp}`}/></span>
                    
                )}
                 
                {noteBack.slice(note ).map((itempColor,index) => 
                     <span><img src={itempColor} className="img-star2" alt="etoile" key={`{index}-{itempColor}`}/></span>
                )}
                
              
                
            </div>
        </div>

    )
}

/*<ul className="img-ul" >
                    {noteImg.map((item, index) => 
                        <li key={index} ><img src={item}/></li>
                    )}
                </ul> */


/*
<li className="star"  >
                            <img src={star} className="img-star" alt="etoile" 
                                onMouseOver={changeBackground}
                                onMouseOut={resetBackground}
                                />
                               
                        </li>*/

/*<div className="tag">
            <div className="all-tag">
                <div>{}</div>
                <div></div>
                <div></div>
            </div>
            <div className="rating">
            </div>
        </div>*/