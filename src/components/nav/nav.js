import React from "react";
import {Link} from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Nav.css"

export default function Nav(){
    return(
        <nav className="nav">
            <div className="logo-bloc"><img src={logo} alt="logo kasa" className="logo"/></div>
            <div className="menu-bloc">
                <div className="link-nav"><Link to="/">Acceuil</Link></div>
                <div className="link-nav"><Link to="/apropos">A Propos</Link></div>
            </div>
        </nav>
    )
}