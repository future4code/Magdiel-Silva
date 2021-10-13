import React from "react";
import {Header} from "./Styled"
import { useHistory } from "react-router-dom";


export const ListTripsPage = () => {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToApplicationForm = () => {
        history.push("/trips/application")
    }

    return(
        <div>
            <Header>
            <h1>Nossas viagens</h1>
            </Header>
            <button onClick={goBack}>VOLTAR</button>
            <button onClick={goToApplicationForm}>AVANÇAR</button>
        </div>
    )
}