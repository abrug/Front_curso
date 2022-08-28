import './App.css';

import Header from "./Componentes/Layout/Header";
import Nav from "./Componentes/Layout/Nav";
import Footer from "./Componentes/Layout/Footer";

import ContactoPage from "./Pages/ContactoPage";
import HomePage from "./Pages/HomePage";
import NosotrosPage from "./Pages/NosotrosPage";
import NovedadesPage from "./Pages/NovedadesPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Nosotros" element={<NosotrosPage/>} />
        <Route path="Novedades" element={<NovedadesPage/>} />
        <Route path="Contacto" element={<ContactoPage/>} /> 
      </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;