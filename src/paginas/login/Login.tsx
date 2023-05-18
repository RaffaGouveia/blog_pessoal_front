import React, { useState, ChangeEvent, useEffect} from "react";
import "./Login.css";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from 'react-use-localstorage';
import { login } from "../../service/Service";
import UserLogin from "../../model/UserLogin";

function Login() {
  let navigate = useNavigate();
  const [token,setToken] = useLocalStorage('token');
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    usuario: "",
    senha: "",
    token: "",
  });

  function updatedModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    if(token !== ''){
      navigate('/home')
    }
  }, [token])

  async function onSubmit(event: ChangeEvent<HTMLFormElement>){
    event.preventDefault();
    try{
    await login(`/usuarios/logar`, userLogin,setToken)
      alert('Usuário logado com sucesso');
    }catch(error){
      alert('Usuário e/ou senha incorretos!')
    }
  }
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="fullfill-vh-color"
    >
      <Grid xs={6} alignItems="center">
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textprimary"
              component="h3"
              align="center"
              className="first-text"
            >
              Entrar
            </Typography>
            <TextField
              value={userLogin.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updatedModel(event)
              }
              id="usuario"
              label="Usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
              className="corEntradas"
            ></TextField>
            <TextField
              value={userLogin.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updatedModel(event)
              }
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
              className="corEntradas"
            ></TextField>
            <Box marginTop={2} textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  className="button-decoration"
                >
                  Logar
                </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                style={{ color: "pink" }}
              >
                Não tem um cadastro?
              </Typography>
            </Box>
            <Link to="/cadastrousuario" className="text-decorator-none">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                style={{ color: "pink", fontWeight: "bold", cursor: "pointer" }}
              >
                {" "}
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="fotoFundo"></Grid>
    </Grid>
  );
}

export default Login;
