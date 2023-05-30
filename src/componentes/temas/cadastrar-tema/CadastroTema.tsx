import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import Tema from "../../../model/Tema";
import { buscaId, post, put } from "../../../service/Service";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function CadastroTema() {
  const [themes, setThemes] = useState<Tema>({
    id: 0,
    descricao: "",
  });
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
      });
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

  function updatedTheme(event: ChangeEvent<HTMLInputElement>) {
    setThemes({
      ...themes,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (id !== undefined) {
      put(`/temas`, themes, setThemes, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Tema atualizado com sucesso!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      post(`/temas`, themes, setThemes, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Tema cadastrado com sucesso!", {
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
    back();
  }

  function back() {
    navigate("/themes");
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Cadastrar tema
        </Typography>
        <TextField
          value={themes.descricao}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            updatedTheme(event)
          }
          id="descricao"
          label="Descrição"
          variant="outlined"
          name="descricao"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroTema;
