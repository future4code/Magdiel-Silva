import React from "react";
import { useHistory } from "react-router-dom";

export const TripDetailsPage = () => {
    historu = useHistory()

    const goBack = () => {
        history.goBack()
    }

    //FAZER BOTÃO PARA APROVAR CANDIDATOS.
    return(
        <div>
            <p>TripDetailsPage</p>
            <button onClick={goBack}>VOLTAR PARA A HOME</button>
            <button>APROVAR CANDIDATOS</button>
        </div>
    )
}