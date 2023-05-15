import { useState } from 'react';
import './App.css';
import Navbar from "./componentes/estaticos/navbar/Navbar";
import Home from "./paginas/home/Home";
import Footer from "./componentes/estaticos/footer/Footer";

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Footer />
    
    </>
  )
}

export default App
