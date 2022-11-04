import React from "react";
import Produits from "../Produits/Produits";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

export default function Home(){
    return(
        <div>
            <Banner/>
            <Produits/>
            <Footer/>
        </div>
    )
}