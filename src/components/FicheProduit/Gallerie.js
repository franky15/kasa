import button from "../../assets/button.png"
import React, { useState } from "react"
import "./Gallerie.scss"

export default function Gallerie({tableObjet}){
    const imgTable = []
    const nombreimg = []
    //récupération de la liste des images
     {tableObjet.forEach(item => imgTable.push(item.pictures))}

     //récupération de la taille de la liste des images
     {imgTable.forEach(item => nombreimg.push(item.length))}
    // console.log(nombreimg)

    
    //creation du usestate
    const [indexImg, setIndexImg] = useState(0)

    //<div className="bloc-img"><img src={tableObjet[0].pictures[indexImg]} className="img-galery" alt="galery d'images" /></div> ligne 25
    return(
        
       
        <div className="galery-blocGallerie">
            <div className="bloc-imgGallerie" style={{backgroundImage: `url(${tableObjet[0].pictures[indexImg]})`}}>
                
            
                <div className="button-blocGallerie">
                    
                    <img src={button} className="img-droite" alt="image droite appartement"
                    onClick= {() => 
                        {setIndexImg( nombreimg[0] - 1  > indexImg  ? (indexImg + 1) : 
                        (indexImg - (nombreimg[0] - 1) ) )}}
                    /> 
                
                    <img src={button} className="img-gauche" alt="image gauche appartement"
                        onClick={() => 
                        {setIndexImg( 0  < indexImg  ? (indexImg - 1) : 
                        (indexImg + nombreimg[0] - 1  ) )}}
                    />
                </div>
            </div>
        </div>
        
    )
}
