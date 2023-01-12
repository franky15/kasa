import React from "react";
import {data} from "../../Data.js";
import {useParams} from "react-router-dom"
import TagProduit from "./Tag.js";
import EtoilesProduit from "./Etoiles";
import Description from "./description.js";
import Gallerie from "./Gallerie.js";
import "./FicheProduit.scss";
import PageErreur from "../PageErreur/PageErreur.js";




export default function FicheProduit(){
   
   let {idUser} = useParams();
   console.log("valeur du params : " +idUser) //////

    const table = []
      

   {data.forEach((product) => product.id == idUser && table.push(product))};
    console.log("id de la base : " + table[0].id)
  
    //const accommodation = data.find((object) => object.id === id);
   

    return(

         <div>
            
      
       {table[0].id === idUser ?  (
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
            </div> )
            : 
            (<PageErreur/> ) }
            
        </div>   
        
    )
}



//////////////////////////

/*
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