import React, { useState } from "react";
import {Header, ContainerCard, StyledInput} from "./Styled"
import { useHistory} from "react-router-dom";
import { useEffect } from "react";

export const CreateTripPage = () => {

    const [newTrip, setNewTrip] = useState({})

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

    return(
        <div>
            <Header>
            <h1>Criar viagem</h1>
            </Header>
            <ContainerCard>
                <StyledInput>
            <input
            placeholder={"Nome da viagem?"}
            />
            <select>
                <option>Mercúrio</option>
                <option>Vênus</option>
                <option>Terra</option>
                <option>Marte</option>
                <option>Júpiter</option>
                <option>Saturno</option>
                <option>Urano</option>
                <option>Netuno</option>
            </select>
            <input
            id={"date"}
            type={"date"}/>
            <input
            placeholder={"Descrição da viagem"}
            />
            
            <input
            placholder={"Duração da viagem em dias"}
            />
            <button onClick={goBack}>VOLTAR</button>
            <button>ENVIAR</button>
            </StyledInput>
            </ContainerCard>
        </div>
    )
}
