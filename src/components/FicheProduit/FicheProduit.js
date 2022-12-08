import React from "react";
import {data} from "../../Data.js";
import {useParams} from "react-router-dom"
import TagProduit from "./Tag.js";
import Description from "./description.js";
import Gallerie from "./Gallerie.js";
import "./FicheProduit.scss"
import Footer from "../Footer/Footer.js";


export default function FicheProduit(){
    const {id} = useParams();
    //console.log(id)
    const table = []
      
    {data.forEach((product) => product.id == id && table.push(product))}
   
    
    return(
       
        <div className="container-ficheProduit">
           {table.map((produit, index) => (
            <div className="sous-container-ficheProduit">
                <div className="gallerie-ficheProduit">
                    <Gallerie tableObjet = {table} />
                </div>
                <div className="title-blocFicheProduit">
                    <h1 className="title-ficheProduit">{produit.title}</h1>
                    <div className="blocUser-ficheProduit">
                        <p className="name-ficheProduit">{produit.host.name}</p>
                        <div className="img-ficheProduit" style={{backgroundImage: `url(${produit.host.picture})`}}></div>
                    </div>
                </div>
                <div className="location-ficheProduit">
                    {produit.location}
                </div>
                <div className="tagProduit-ficheProduit">
                    <TagProduit tableObjet = {table} />
                </div>
                <div className="description-ficheProduit"> 
                    <Description tableObjet = {table} />
                </div>
                
            </div>
            ))}
        </div>
        
    )
}
//<img src={produit.host.picture} className="img-hote" alt="image de l'hote" key={`{index}-{produit}`}/> ligne30