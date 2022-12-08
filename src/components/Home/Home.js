import React from "react";
import Produits from "../Produits/Produits";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import "./Home.scss"

export default function Home(){
    return(
        <div className="container-home">
            <Banner/>
            <Produits/>
            
        </div>
    )
}
//<Footer/>