import React from "react";
import {Header} from "./Styled"
import { useHistory } from "react-router-dom";

export const CreateTripPage = () => {

   const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    // FAZER BOTÃO PARA ENVIAR
    return(
        <div>
            <Header>
            <h1>Criar viagem</h1>
            </Header>
            <button onClick={goBack}>VOLTAR PARA A HOME</button>
            <button>ENVIAR</button>
        </div>
    )
}
