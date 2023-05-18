import React from 'react';
import './CadastroUser.css'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function CadastrarUsuario(){
    return(
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className = "fullfill-vh-color2"
      >
        <Grid xs={6} className="fotoFundo2"></Grid>
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
                Cadastrar
              </Typography>
              <TextField
                id="nome"
                label="Nome"
                variant="outlined"
                name="nome"
                margin="normal"
                fullWidth
                className="corEntradas2"
              ></TextField>
              <TextField
                id="usuario"
                label="Usuário"
                variant="outlined"
                name="usuario"
                margin="normal"
                fullWidth
                className="corEntradas2"
              ></TextField>
              <TextField
                id="senha"
                label="Senha"
                variant="outlined"
                name="senha"
                type='password'
                margin="normal"
                fullWidth
                className="corEntradas2"
              ></TextField>
              <TextField
                id="confirmarSenha"
                label="Confirmar Senha"
                variant="outlined"
                name="confirmarSenha"
                type='password'
                margin="normal"
                fullWidth
                className="corEntradas2"
              ></TextField>
              <Box marginTop={2} textAlign="center">
                <Link to="/login">
                  <Button
                    variant="contained"
                    className="btnCancelar"
                  >
                    Cancelar
                  </Button>
                </Link>
                <Button
                variant='contained'
                className='btnCadastrar'>
                    Cadastrar
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
        
      </Grid>
    )
}

export default CadastrarUsuario;