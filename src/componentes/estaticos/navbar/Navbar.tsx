import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box, Button, Grid } from "@mui/material";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function goLogout() {
    dispatch(addToken(""));
    toast.info("Usuário deslogado!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    navigate("/login");
  }

  var navbarComponent;

  if (token !== "") {
    navbarComponent = (
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
    );
  }

  return <>{navbarComponent}</>;
}
export default Navbar;
