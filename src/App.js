import {Routes, Route} from "react-router-dom"
import Apropos from "./components/Apropos/Apropos";
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
        <Route path="/produits/:id" element={<FicheProduit/>} />
        <Route path="*" element={<PageErreur/>} />
        
      </Routes>
    </div>
  );
}

export default App;

