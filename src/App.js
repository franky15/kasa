import {Routes, Route} from "react-router-dom"
import Apropos from "./components/Apropos/Apropos";
import Banner from "./components/Banner/Banner";
import FicheProduit from "./components/FicheProduit/FicheProduit";
import Home from "./components/Home/Home";
import Nav from "./components/nav/nav";
import PageErreur from "./components/PageErreur/PageErreur";



function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/apropos" element={<Apropos/>} />
        <Route path="/produit/:id" element={<FicheProduit/>} />
        <Route path="*" element={<PageErreur/>} />
        
      </Routes>
    </div>
  );
}

export default App;

