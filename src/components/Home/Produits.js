import React from "react";
import {data} from "../../Data.js";
import "./Produits.scss"


export default function Produits(){
    
    return(
        <div className="bloc-produits" >
            <div className="sous-bloc-produits"> 
                {data.map((produit, index) => (  
                    <a className="produits" key= { `${produit}-${index}` } href={`/produits/${produit.id}`}>
                        <div className="image-produit"> 
                            <img src={produit.cover} className="img-nav" alt="product"/>
                        </div>
                        <div className="title-produit">
                            <h4 className="title-item">{produit.title}</h4>
                        </div>
                    </a>)) 
                }     
            </div>
        </div>
    )
}
