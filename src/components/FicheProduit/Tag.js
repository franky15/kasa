//import star from "../../assets/star.png"
import "./Tag.scss"

export default function TagProduit({tableObjet}){

    const allTag = [];
    //const notes = []
    //var note = 0 ;

    {tableObjet.forEach((itemp) => (allTag.push(itemp.tags)))}
   // console.log(allTag[0])
    
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



