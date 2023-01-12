
import { Routes, Route } from "react-router-dom"
//import { BrowserRouter as Routes, Route,Switch} from "react-router-dom"
import Apropos from "./components/Apropos/Apropos";
import FicheProduit from "./components/FicheProduit/FicheProduit";
import Home from "./components/Home/Home";
import Nav from "./components/nav/nav";
import PageErreur from "./components/PageErreur/PageErreur";
import Footer from "./components/Footer/Footer";




function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/apropos" element={<Apropos/>} />
        <Route path="/produits/:idUser" element={<FicheProduit/>} />

        <Route  path="*" element={<PageErreur/>} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;




/*
//
import React from 'react';

import {Routes, Route, Navigate } from "react-router-dom";

import Apropos from "./components/Apropos/Apropos";
import FicheProduit from "./components/FicheProduit/FicheProduit";
import Home from "./components/Home/Home";
import Nav from "./components/nav/nav";
import PageErreur from "./components/PageErreur/PageErreur";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
     
    
        <Nav/>
        <Routes>
          <Route   path="/" element={<Home/>} />
          <Route   path="/apropos" element={<Apropos/>} />
          <Route   path="/produits/:idUser" element={<FicheProduit/>} />

          <Route path="/404" element={<PageErreur/>} />
          <Route  path="*" element={<Navigate />} />
          
        </Routes>
        <Footer/>
    
     
    </div>
  );
}

export default App;

*/