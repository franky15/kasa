import React from "react";
import {data} from "../../Data.js";
import {useParams, Navigate} from "react-router-dom"
import TagProduit from "./Tag.js";
import EtoilesProduit from "./Etoiles";
import Description from "./description.js";
import Gallerie from "./Gallerie.js";
import "./FicheProduit.scss";
//import PageErreur from "../PageErreur/PageErreur.js";

//import { useState } from "react";


export default function FicheProduit(){
   
    let idUser = ""
    idUser = useParams();

    //récupération de la valeur de l'id de l'url
    let idUrl = ""
    idUrl = idUser.idUser
    
   // console.log( idUser)
    //let {idUser} = useParams();
   //console.log("valeur du params : " + idUser.idUser) //////

    const table = []
    {data.forEach((product) => product.id === idUrl && table.push(product) )};
   
   //////////////////////////////////
   const logementFiche = data.find(logement => logement.id === idUrl);


    return(
        
         <div>
            
            {  logementFiche ?
            <div className="container-ficheProduit">
                {table.map((produit, index) => (
                    <div className="sous-container-ficheProduit" key = { `${produit}-${index}` }>
                        <div className="gallerie-ficheProduit">
                            <Gallerie tableObjet = {table} />
                        </div>

                        <div className="container-info-produit">
                            <div className="bloc-des-descriptions">
                                <h1 className="title-ficheProduit">{produit.title}</h1>
                                <div className="location-ficheProduit">
                                    {produit.location}
                                </div>
                                <div className="tagProduit-ficheProduit">
                                    <TagProduit tableObjet = {table} />
                                </div>
                            </div>
                            <div className="bloc-proprio">
                                <div className="blocUser-ficheProduit">
                                    <p className="name-ficheProduit">{produit.host.name}</p>
                                    <div className="img-ficheProduit" style={{backgroundImage: `url(${produit.host.picture})`}}></div>
                                    
                                </div>
                                <div className="etoiles-bloc">
                                        <EtoilesProduit tableObjet = {table} />
                                    </div>
                            </div>
                        
                        </div>
                        <div className="description-ficheProduit"> 
                            
                            <Description tableObjet = {table} />
                        </div>
                    </div>
                    ))}
                     
            </div> 
                : < Navigate replace to= "PageErreur" />
              }

        </div>   
        
        
    )
}

/*
<div>
            {console.log("id erroné : " + logement.id )}
              {logement.id  !== idUrl && <PageErreur/> }
        </div>
*/

//////////////////////////

/*

 {table[0].id === idUser ? 
  
     : 
            (<PageErreur/> ) }

////////////////////
<div>
    {table[0].id === idUser ? 

   : <PageErreur/> }
        </div>  
*/
/*


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

*/
//////////////////////////
//<img src={produit.host.picture} className="img-hote" alt="image de l'hote" key={`{index}-{produit}`}/> ligne30