import React from "react";
import {data} from "../../Data.js";
import "./Produits.css"
import {useParams} from "react-router-dom"


export default function Produits(){
     const {id} = useParams()
    return(
        <div className="bloc-produits" >
            <div className="sous-bloc-produits">
                {data.map((produit, index) => (
                        <a className="produits" key={produit.id} href="/produit/{produit.id}">
                            <div className="image-produit"> 
                                <img src={produit.cover} className="img-nav"/>
                            </div>
                            <div className="title-produit">
                                <h4>{produit.title}</h4>
                            </div>
                        </a>
                    )

                )}
                        
            </div>
        </div>
    )
}