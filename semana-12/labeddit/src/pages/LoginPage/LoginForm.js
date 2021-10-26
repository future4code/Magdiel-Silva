import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import {  goToFeedPage } from "../../router/coordinator";
import { TextField } from "@mui/material";
import {  StyledInput } from "./styled";
import useForm from "../../hooks/useForm";

const LoginForm = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  
  const onSubmitForm = (event) => {
    event.preventDefault()
  };

  return (
      <StyledInput>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
          <Button
        typo={"submit"}
        onClick={() => goToFeedPage(history)}
        variant={"contained"}
        color={"primary"}
        fullWidth
      >
        FAZER LOGIN
      </Button>
        </form>
      </StyledInput>
  );
};

export default LoginForm;