import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import "./CadastroPost.css";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Post from "../../../model/Postagem";
import { busca, buscaId, post, put } from "../../../service/Service";
import Tema from "../../../model/Tema";

function CadastroPost() {
  const [posts, setPosts] = useState<Post>({
    id: 0,
    titulo: "",
    texto: "",
    tema: null,
  });
  const [theme, setTheme] = useState<Tema>({
    id: 0,
    descricao: "",
  });
  const [themes, setThemes] = useState<Tema[]>([]);
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
    setPosts({
      ...posts,
      tema: theme,
    });
  }, [theme]);

  useEffect(() => {
    getThemes();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function getThemes() {
    await busca("/temas", setThemes, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdPostagem(id: string) {
    await buscaId(`/postagens/${id}`, setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedPost(event: ChangeEvent<HTMLInputElement>) {
    setPosts({
      ...posts,
      [event.target.name]: event.target.value,
      tema: theme,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (id !== undefined) {
      put(`/postagens`, posts, setPosts, {
        headers: {
          Authorization: token,
        },
      });
      alert("Postagem atualizado com sucesso!");
    } else {
      post(`/postagens`, posts, setPosts, {
        headers: {
          Authorization: token,
        },
      });
      alert("Postagem cadastrado com sucesso!");
    }
    back();
  }

  function back() {
    navigate("/posts");
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
          Cadastrar postagem
        </Typography>
        <TextField
          value={posts.titulo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPost(e)}
          id="titulo"
          label="titulo"
          variant="outlined"
          name="titulo"
          margin="normal"
          fullWidth
        />
        <TextField
          value={posts.texto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPost(e)}
          id="texto"
          label="texto"
          name="texto"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">Temas </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(e) =>
              buscaId(`/tema/${e.target.value}`, setTheme, {
                headers: {
                  Authorization: token,
                },
              })
            }
          >
            {themes.map((theme) => (
              <MenuItem value={theme.id}>{theme.descricao}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Escolha um tema para a postagem</FormHelperText>
          <Button type="submit" variant="contained" color="primary">
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
export default CadastroPost;
