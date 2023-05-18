import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box, Button, Grid } from "@mui/material";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <AppBar position="static" className="navBar">
        <Toolbar variant="dense">
          <Grid container justifyContent={"space-between"}>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Link to="/home">
                <Button className="button-decoration">
                  <Typography variant="h6">Blog Pessoal</Typography>
                </Button>
              </Link>
            </Box>
            <Box display="flex" justifyContent="start">
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Link to="/postagens">
                  <Button className="button-decoration">
                    <Typography>Postagens</Typography>
                  </Button>
                </Link>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Link to="/temas">
                  <Button className="button-decoration">
                    <Typography>Temas</Typography>
                  </Button>
                </Link>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Link to="/cadastroTemas">
                  <Button className="button-decoration">
                    <Typography>Cadastrar tema</Typography>
                  </Button>
                </Link>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Link to="/login">
                  <Button className="button-decoration">
                    <Typography>Logout</Typography>
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;
