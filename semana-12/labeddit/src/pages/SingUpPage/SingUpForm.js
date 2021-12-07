import React from "react";
import { useHistory } from "react-router";
import { Button, TextField } from "@mui/material";
import {  StyledInput } from "./styled";
import useForm from "../../hooks/useForm";
import { singUp } from "../../services/users";

const SingUpForm = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({username: "", email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        singUp(form, clear, history)
    }

    return(
        <StyledInput>
            <form onSubmit={onSubmitForm}>
            <TextField
            name={"username"}
            value={form.username}
            onChange={onChange}
            label={"Insira o seu nome ou apelido"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
            />
            <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"Insira o seu email"}
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
            label={"Digite a sua senha - mínimo 8 caracteres"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
            />
            <Button
            type={"submit"}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            >
                ENVIAR
            </Button>
            </form>
            </StyledInput>
    )
}
export default SingUpForm