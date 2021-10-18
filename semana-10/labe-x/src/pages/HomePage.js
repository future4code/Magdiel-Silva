import React from "react";
import {Container, Header, Body, ButtonContainer} from "./Styled";
import Typography from "@material-ui/core/Typography"
import {Button} from "@material-ui/core"
import { useHistory } from "react-router-dom";

export const HomePage = () => {
    const history = useHistory()

    const goToListTrips = () => {
        history.push("/trips/list")
    }

    const goToLoginPage = ()=> {
        history.push("/login")
    }

    return(
        <Container>
            <Header>
                <Typography variant="h1">labe-X</Typography>
            </Header>
            <Body>
            <p>Olá, somos a Labe-X.
                Primeira empresa brasileira especializada em 
                viagens intergalácticas.
                Conheça e cadastre-se em nossos pacotes exclusivos
            </p>
            </Body>
            <ButtonContainer>
            <Button variant={"contained"} color={"primary"} onClick={goToListTrips}> NOSSAS VIAGENS </Button>
            <Button variant={"contained"} onClick={goToLoginPage}> ADMIN - PRIVADO</Button>
            </ButtonContainer>
        </Container>
    )
}