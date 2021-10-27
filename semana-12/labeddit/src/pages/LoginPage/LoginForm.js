import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { TextField } from "@mui/material";
import {  StyledInput } from "./styled";
import useForm from "../../hooks/useForm";
import {login} from "../../services/users";
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext";


const LoginForm = () => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const {states, seters} = useContext(GlobalStateContext)

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, history, seters.setRightButtonText)
  }
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
        type={"submit"}
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