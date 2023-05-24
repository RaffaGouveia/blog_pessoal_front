import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import "./DeletarTema.css";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { buscaId, deleteId } from "../../../service/Service";
import Tema from "../../../model/Tema";

function DeletarTema() {
  const [themes, setThemes] = useState<Tema>();
  const [token, setToken] = useLocalStorage("token");
  const { id } = useParams<{ id: string }>();
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado para isso!");
      navigate("/login");
    }
  }, ["token"]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/temas/${id}`, setThemes, {
      headers: {
        Authorization: token,
      },
    });
  }

  function sim() {
    navigate("/themes");
    deleteId(`/temas/$id`, {
      header: {
        Authorization: token,
      },
    });
    alert("Tema deletado com sucesso!");
  }

  function nao() {
    navigate("/themes");
  }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">{themes?.descricao}</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
              <Box mx={2}>
                <Button
                  onClick={sim}
                  variant="contained"
                  className="marginLeft"
                  size="large"
                  color="primary"
                >
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button
                  onClick={nao}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;
