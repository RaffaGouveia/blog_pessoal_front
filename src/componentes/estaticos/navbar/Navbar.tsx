import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box, Button, Grid } from "@mui/material";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

function Navbar() {
  const [token, setToken] = useLocalStorage("token");
  let navigate = useNavigate();

  function goLogout() {
    setToken("");
    alert("Usuário deslogado!");
    navigate("/login");
  }

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
                <Link to="/posts">
                  <Button className="button-decoration">
                    <Typography>Postagens</Typography>
                  </Button>
                </Link>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Link to="/themes">
                  <Button className="button-decoration">
                    <Typography>Temas</Typography>
                  </Button>
                </Link>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Link to="/formThemes">
                  <Button className="button-decoration">
                    <Typography>Cadastrar tema</Typography>
                  </Button>
                </Link>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }} onClick={goLogout}>
                <Button className="button-decoration">
                  <Typography>Logout</Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;
