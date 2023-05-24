import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import Tema from "../../../model/Tema";
import { buscaId, post, put } from "../../../service/Service";
import useLocalStorage from "react-use-localstorage";
import { useNavigate, useParams } from "react-router-dom";

function CadastroTema() {
  const [themes, setThemes] = useState<Tema>({
    id: 0,
    descricao: "",
  });
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

  function updatedTheme(event: ChangeEvent<HTMLInputElement>) {
    setThemes({
      ...themes,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Tema " + JSON.stringify(themes));

    if (id !== undefined) {
      console.log(themes);
      put(`/temas`, themes, setThemes, {
        headers: {
          Authorization: token,
        },
      });
      alert("Tema atualizado com sucesso!");
    } else {
      post(`/temas`, themes, setThemes, {
        headers: {
          Authorization: token,
        },
      });
      alert("Tema cadastrado com sucesso!");
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
