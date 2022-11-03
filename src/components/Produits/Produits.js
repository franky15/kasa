import React from "react";
import {data} from "../../Data.js";
import { useState, useEffect } from "react";


import "./Produits.css"

export default function Produits(){
    
    return(
        <div className="bloc-produits" >
            <div className="sous-bloc-produits">
               
                {data.map((produit, index) => (
                        <a className="produits" key={produit.id} href="">
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