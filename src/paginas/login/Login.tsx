import React from "react";
import "./Login.css";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: "rgb(214, 93, 93)" }}
    >
      <Grid xs={6} alignItems="center">
        <Box paddingX={20}>
          <form>
            <Typography
              variant="h3"
              gutterBottom
              color="textprimary"
              component="h3"
              align="center"
              style={{ fontWeight: "bold", color: "aquamarine" }}
            >
              Entrar
            </Typography>
            <TextField
              id="usuario"
              label="Usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
              className="corEntradas"
            ></TextField>
            <TextField
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
              <Link to="/home">
                <Button
                  type="submit"
                  variant="contained"
                  className="button-decoration"
                >
                  Logar
                </Button>
              </Link>
            </Box>
          </form>
          <Link to='/cadastro' className='text-decorator-none'>
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
            <Typography
              variant="subtitle1"
              gutterBottom
              align="center"
              style={{ color:"pink", fontWeight:"bold", cursor: 'pointer' }}
            > Cadastre-se</Typography>
          </Box>
          </Link>
          
        </Box>
      </Grid>
      <Grid xs={6} className="fotoFundo"></Grid>
    </Grid>
  );
}

export default Login;
