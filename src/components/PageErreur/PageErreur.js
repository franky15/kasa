import React from "react";
import { Link } from "react-router-dom";
import "./PageErreur.css"

export default function PageErreur(){
    return(
        <div className="container">
           <div className="error">404</div>
           <p className="description">Oups! La page que vous demandez n'existes pas.</p>
           <div className="lien"> <Link to="/" className="acceuil">Retourner sur la page d'acceuil</Link></div>
        </div>
    )
}