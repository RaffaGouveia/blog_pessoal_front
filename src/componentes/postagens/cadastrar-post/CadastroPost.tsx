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
import Postagem from "../../../model/Postagem";
import { busca, buscaId, post, put } from "../../../service/Service";
import Tema from "../../../model/Tema";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import User from "../../../model/User";
import { toast } from "react-toastify";

function CadastroPost() {
  const [themes, setThemes] = useState<Tema[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);
  const { id } = useParams<{ id: string }>();
  let navigate = useNavigate();
  const [posts, setPosts] = useState<Postagem>({
    id: 0,
    titulo: "",
    texto: "",
    data: "",
    tema: null,
    usuario: null,
  });
  const [theme, setTheme] = useState<Tema>({
    id: 0,
    descricao: "",
  });
  const [user, setUser] = useState<User>({
    id: +userId,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

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
    setPosts({
      ...posts,
      tema: theme,
      usuario: user,
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
    console.log(posts);
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (id !== undefined) {
      put(`/postagens`, posts, setPosts, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Postagem atualizado com sucesso!", {
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
      post(`/postagens`, posts, setPosts, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Postagem cadastrado com sucesso!", {
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
              buscaId(`/temas/${e.target.value}`, setTheme, {
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
