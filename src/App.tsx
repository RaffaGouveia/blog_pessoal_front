import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./componentes/estaticos/navbar/Navbar";
import Home from "./paginas/home/Home";
import Footer from "./componentes/estaticos/footer/Footer";
import Login from "./paginas/login/Login";
import CadastroTema from "./componentes/temas/cadastrar-tema/CadastroTema";
import ListaTema from "./componentes/temas/listaTema/ListaTema";
import ListaPostagem from "./componentes/postagens/listaPostagem/ListaPostagem";
import DeletarTema from "./componentes/temas/deletar-tema/DeletarTema";
import CadastroPost from "./componentes/postagens/cadastrar-post/CadastroPost";
import DeletarPostagem from "./componentes/postagens/deletar-post/DeletarPost";
import CadastrarUser from "./paginas/cadastrar-user/CadastroUser";
import { Provider } from "react-redux";
import store from "./store/Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<CadastrarUser />} />
            <Route path="/posts" element={<ListaPostagem />} />
            <Route path="/themes" element={<ListaTema />} />
            <Route path="/formThemes" element={<CadastroTema />} />
            <Route path="/formThemes/:id" element={<CadastroTema />} />
            <Route path="/deleteTheme/:id" element={<DeletarTema />} />
            <Route path="/formPosts" element={<CadastroPost />} />
            <Route path="/formPosts/:id" element={<CadastroPost />} />
            <Route path="/deletePost/:id" element={<DeletarPostagem />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
