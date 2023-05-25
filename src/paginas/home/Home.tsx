import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Home.css";
import TabPostagem from "../../componentes/postagens/tabPostagem/TabPostagem";
import ModalPost from "../../componentes/postagens/modal-post/ModalPost";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="superior-HomePage-part"
    >
      <Grid alignItems="center" item xs={6}>
        <Box paddingX={20}>
          <Typography
            variant="h3"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            className="titulo"
          >
            Seja bem vindo(a)!
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h5"
            align="center"
            className="titulo"
          >
            Expresse aqui os seus pensamentos e opiniões!
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box marginRight={1}>{<ModalPost />}</Box>
          <Link to='/posts'>
          <Button variant="outlined" className="custom-button-post">
            Ver postagens
          </Button>
          </Link>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <img
          src="https://i.imgur.com/H88yIo2.png"
          alt=""
          width="500px"
          height="500px"
        />
      </Grid>
      <Grid xs={12} className="postagem"></Grid>
      <TabPostagem />
    </Grid>
  );
}

export default Home;
