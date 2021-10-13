import React from "react";
import {Container, Header, Body} from "./Styled";
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
            <h1>labe-X</h1>
            </Header>
            <Body/>
            <button onClick={goToListTrips}> NOSSAS VIAGENS </button>
            <button onClick={goToLoginPage}> ADMIN - PRIVADO</button>
        </Container>
    )
}