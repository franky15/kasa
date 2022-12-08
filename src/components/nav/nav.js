import React from "react";
import {Link} from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Nav.scss"

export default function Nav(){
    return(
        <header className="header">
            <div className="logo-bloc"><img src={logo} alt="logo kasa" className="logo"/></div>
            <nav className="menu-bloc">
                <div className="link-nav"><Link to="/" className="none">Acceuil</Link></div>
                <div className="link-nav"><Link to="/apropos" className="none">A Propos</Link></div>
            </nav>
        </header>
    )
}