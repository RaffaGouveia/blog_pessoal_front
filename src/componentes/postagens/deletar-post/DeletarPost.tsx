import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { Box } from "@mui/material";
import "./DeletarPost.css";
import Post from "../../../model/Postagem";
import { buscaId, deleteId } from "../../../service/Service";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function DeletarPost() {
  const [posts, setPosts] = useState<Post>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const { id } = useParams<{ id: string }>();
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      toast.warning("Você precisa estar logado para isso!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;
      navigate("/login");
    }
  }, ["token"]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/postagens/${id}`, setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }

  function sim() {
    navigate("/posts");
    deleteId(`/postagens/$id`, {
      header: {
        Authorization: token,
      },
    });
    toast.success("Postagem deletada com sucesso!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  function nao() {
    navigate("/posts");
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary">{posts?.titulo}</Typography>
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
              <Box>
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
export default DeletarPost;
