import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import { goToSingUpPage } from "../../router/coordinator";
import LoginImage from "../../assets/LoginImage.png";
import { StyledLoginPage, ContainerImage, } from "./styled";
import LoginForm from "./LoginForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = () => {
  useUnprotectedPage()
  const history = useHistory();
  
  return (
    <StyledLoginPage>
      <h2></h2>
      <ContainerImage src={LoginImage} />
      <LoginForm/>
      <Button
        onClick={() => goToSingUpPage(history)}
        type={"submit"}
        fullWidth
        variant={"text"}
        color="primary"
      >
        NÃO POSSUI UMA CONTA? CADASTRE-SE
      </Button>
    </StyledLoginPage>
  );
};

export default LoginPage;
