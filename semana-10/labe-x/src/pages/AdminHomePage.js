import React from "react";
import {Header} from "./Styled"
import { useHistory } from "react-router-dom";

export const AdminHomePage = () => {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    } 
    
    const goToCreateTrip = ()=> {
        history.push("/admin/trips/create")
    }

    const goToTripDetails = () => {
        history.push("/admin/trips/:id")
    }


    //FAZER FUNÇÃO/BOTÃO PARA LOGOUT

    //FAZER FUNÇÃO/BOTÃO PARA EXCLUIR VIAGEM 
    return(
        <div>
            <Header>
            <h1>Perfil Administrador</h1>
            </Header>
            <button onClick={goBack}>VOLTAR</button>
            <button onClick={goToCreateTrip}>CRIAR NOVA VIAGEM</button>
            <button onClick={goToTripDetails}>DETALHES</button>
            <button>LOGOUT</button>
            <button>EXCLUIR</button>

        </div>
    )

}