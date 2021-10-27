import { Typography } from "@mui/material";
import React from "react";
import ErroImage from "../../assets/ErroImage.png"
import { ContainerImage, StyledErrorPage } from "./styled";

const ErrorPage = () => {
    return(
        <StyledErrorPage>
            <Typography variant={"h4"} color={"primary"} >Erro! Clique em voltar para acessar o login</Typography>
        <ContainerImage src={ErroImage}/>
        </StyledErrorPage>
    )
}

export default ErrorPage