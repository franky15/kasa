import React from "react";
import Produits from "./Produits";
import Banner from "../Banner/Banner";
import "./Home.scss"

export default function Home(){



    
    return(
        <div className="container-home">
            <Banner/>
            <Produits/>
            
        </div>
    )
}
