import button from "../../assets/button.png"
import React, { useState } from "react"
import "./Gallerie.css"

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

    return(
        <h1>mon test </h1>,
        console.log(tableObjet[0].pictures[indexImg]),
        <div className="galery-bloc">
            <div className="bloc-img">
                <img src={tableObjet[0].pictures[indexImg]} className="img-galery" alt="galery d'images" key={`{index}-{produit}`}/>
            </div>
            <div className="button-droit" onClick= {() => 
                {setIndexImg( nombreimg[0] - 1  > indexImg  ? (indexImg + 1) : 
                (indexImg - (nombreimg[0] - 1) ) )}
            }> 
            
                <img src={button} className="img-size" alt="image appartement"/> 
            </div>
            <div className="button-gauche" onClick={() => 
                {setIndexImg( 0  < indexImg  ? (indexImg - 1) : 
                (indexImg + nombreimg[0] - 1  ) )}}>
                <img src={button} className="img-size" alt="image appartement"/>
            </div>
        </div>
        
    )
}
/*nombreimg[0]  > indexImg  ? (indexImg + 1) : 
                (indexImg - indexImg )*/
                
/*<div className="button-droit" onClick= {btnDroit}> 
                <img src={button} className="img-size" alt="image appartement"/> 
            </div>
            <div className="button-gauche" onClick={btnGauche}>
                <img src={button} className="img-size" alt="image appartement"/>
            </div>*/