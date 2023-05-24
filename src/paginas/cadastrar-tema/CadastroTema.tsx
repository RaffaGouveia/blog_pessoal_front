import React, { useEffect, useState } from 'react';
import './CadastroTema.css'
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../model/Tema';
import { useNavigate } from 'react-router-dom';

function CadastroTema(){
    const [themes, setThemes] = useState<Tema[]>([])
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();
  
    useEffect(() => {
      if(token == ''){
        alert("Você precisa estar logado para isso!")
        navigate('/login')
      }
    },['token']
    )
    return(
        <>
        <h1>Cadastrar Tema</h1>
        </>
    )
}

export default CadastroTema;