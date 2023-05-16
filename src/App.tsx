import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./componentes/estaticos/navbar/Navbar";
import Home from "./paginas/home/Home";
import Footer from "./componentes/estaticos/footer/Footer";
import Login from "./paginas/login/Login"
import CadastrarUsuario from "./paginas/cadastrar/CadastroUser";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<CadastrarUsuario />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
