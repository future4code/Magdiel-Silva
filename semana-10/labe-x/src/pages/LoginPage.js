import React from "react";
import axios from "axios";
import { useState } from "react";
import { Header, StyledInput, Container } from "./Styled";
import {Button, TextField} from "@material-ui/core"
import { useHistory } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/magdiel-silva-maryam/login";
  const onSubmitLogin = () => {
    console.log(email, password);
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(url, body)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        goToAdminHome();
      })
      .catch((error) => {
        alert("Erro de login ou senha!", error);
      });
  };

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  const goToAdminHome = () => {
    history.push("/admin/trips/list");
  };

  return (
    <Container>
      <Header>
        <h2>Realize o seu login</h2>
      </Header>
      <StyledInput>
        <TextField
          label={"Email:"}
          type={"email"}
          value={email}
          onChange={onChangeEmail}
          required
        />
        <TextField
          label={"Senha:"}
          type={"password"}
          value={password}
          onChange={onChangePassword}
          required
        />
        <Button variant={"contained"} color={"primary"} onClick={onSubmitLogin}>ENTRAR</Button>
        <Button variant={"contained"} onClick={goBack}>VOLTAR</Button>
      </StyledInput>
    </Container>
  );
};
