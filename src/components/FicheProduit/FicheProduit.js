import React from "react";
import {useParams} from "react-router-dom"

export default function FicheProduit(){
    const {id} = useParams()
    console.log(id)
    return(
        <div>
           Notre fiche produit{id}
        </div>
    )
}