import React from "react";
import {Header} from "./Styled"
import { useHistory} from "react-router-dom";
import { useEffect } from "react";

export const CreateTripPage = () => {

   const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if (token === null){
            history.push("/login")
        }
    }, [])


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
