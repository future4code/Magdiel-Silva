import React from "react";
import { Header } from "./Styled";
import { useHistory } from "react-router";


export const ApplicationFormPage = () => {
    const history = useHistory()
    
    const goBack = () => {
        history.goBack()
    }

    //FAZER A FUNÇÃO PARA ENVIAR AS REQUISIÇÕES

    return(
        <div>
            <Header>
            <h1>Candidate-se</h1>
            </Header>
            <h2> INSCREVA-SE PARA UMA AVENTURA INESQUECÍVEL </h2>
            <select>
                <option>VIAGEM 1</option>
                <option>VIAGEM 2</option>
                <option>VIAGEM 3</option>
                <option>VIAGEM 4</option>
            </select>
            <input 
            placeholder="Nome:"
            />
            <input 
            placeholder="Idade:"
            />
            <input 
            placeholder="Texto de candidatura:"
            />
            <input 
            placeholder="Profissão:"
            />
            <select>
                <option>PAÍS 1</option>
                <option>PAÍS 2</option>
                <option>PAÍS 3</option>
                <option>PAÍS 4</option>
            </select>
            <button onClick={goBack}> VOLTAR </button>
            <button> ENVIAR </button>
        </div>
    )
}