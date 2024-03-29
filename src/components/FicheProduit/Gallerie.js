import button from "../../assets/button.png"
import React, { useState } from "react"
import "./Gallerie.scss"

export default function Gallerie({tableObjet}){
    const imgTable = []
    const quantiteImg = []

    //récupération de la liste des images
     {tableObjet.forEach(item => imgTable.push(item.pictures))}

     //récupération de la taille de la liste des images qui correspond à la quantité ou  nombre d'images
     {imgTable.forEach(item => quantiteImg.push(item.length))}
    console.log("  qunatité d'images : " + quantiteImg)

    
    //creation du usestate
    const [numeroImg, setIndexImg] = useState(0)
    console.log(" numéro img : " + numeroImg)

    return(
        
       
        <div className="galery-blocGallerie">
                { quantiteImg[0] === 1 ? 
                    (
                        <div className="bloc-imgGallerie" style={{backgroundImage: `url(${tableObjet[0].pictures[numeroImg]})`}}></div>
                    )
                        : ( 
                    <div className="bloc-imgGallerie" style={{backgroundImage: `url(${tableObjet[0].pictures[numeroImg]})`}}>
                        
                        <div className="button-blocGallerie">
                            <img src={button} className="img-droite" alt="buton droite appartement"
                            onClick= {() => 
                                {setIndexImg( quantiteImg[0] - 1  > numeroImg ? (numeroImg + 1) : 
                                (numeroImg - (quantiteImg[0] - 1) ) )}}
                            /> 
                            <img src={button} className="img-gauche" alt="buton gauche appartement"
                                onClick={() => 
                                {setIndexImg( 0  < numeroImg  ? (numeroImg - 1) : 
                                (numeroImg + quantiteImg[0] - 1  ) )}}
                            />
                        </div>
                
                    </div>)
                }
        </div>
        
    )
}
