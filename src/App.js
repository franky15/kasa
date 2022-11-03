import {Routes, Route} from "react-router-dom"
import Apropos from "./components/Apropos/Apropos";
import FicheProduit from "./components/FicheProduit/FicheProduit";
import Home from "./components/Home/Home";
import Nav from "./components/nav/nav";
import Banner from "./components/Banner/Banner";
import Produits from "./components/Produits/Produits";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/apropos" element={<Apropos/>} />
        <Route path="/produit/:id" element={<FicheProduit/>} />
      </Routes>
      <Banner/>
      <Produits/>
    </div>
  );
}

export default App;

