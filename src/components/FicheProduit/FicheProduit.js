import React from "react";
import {useParams} from "react-router-dom"

export default function FicheProduit(){
    const params = useParams()
    console.log(params)
    return(
        <div>
           Notre fiche produit
        </div>
    )
}