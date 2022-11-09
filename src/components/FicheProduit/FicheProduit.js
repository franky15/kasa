import React from "react";
import {data} from "../../Data.js";
import {useParams} from "react-router-dom"
import TagProduit from "./Tag.js";
import Description from "./description.js";
import Gallerie from "./Gallerie.js";


export default function FicheProduit(){
    const {id} = useParams();
    //console.log(id)
    const table = []
      
    {data.forEach((product) => product.id == id && table.push(product))}
   
    
    return(
       
        <div>
           {table.map((produit, index) => (
            <div>
                <Gallerie tableObjet = {table} />
               
                <div className="title-bloc">
                    <h1>{produit.title}</h1>
                    <p>{produit.host.name}</p>
                    <div><img src={produit.host.picture} className="img-hote" alt="image de l'hote" key={`{index}-{produit}`}/></div>
                </div>
                <div className="location">{produit.location}</div>
                <TagProduit tableObjet = {table} />
                <Description tableObjet = {table} />
                
               
            </div>
            ))}
        </div>
        
    )
}