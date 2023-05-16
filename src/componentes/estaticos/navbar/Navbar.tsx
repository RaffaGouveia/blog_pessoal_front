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
            <Box style={{ cursor: "pointer" }}>
              <Typography variant="h5" color="inherit">
                Blog Pessoal
              </Typography>
            </Box>
            <Box display="flex" justifyContent="start">
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Link to="/home">
                  <Button className='button-decoration'>
                    <Typography style={{ color: "rgb(179, 51, 73)" }}>
                      Home
                    </Typography>
                  </Button>
                </Link>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  Cadastrar tema
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Link to="/login">
                  <Button className='button-decoration'>
                    <Typography>
                      Logout
                    </Typography>
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
