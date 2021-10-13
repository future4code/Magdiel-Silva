import React from "react";
import {Header} from "./Styled"
import { useHistory } from "react-router-dom";

export const LoginPage = () => {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    const goToAdminHome = () => {
        history.push("/admin/trips/list")
    }

    return(
        <div>
            <Header>
            <h1>LoginPage</h1>
            </Header>
            <input 
            placeholder="Email:"
            />
              <input 
            placeholder="Senha:"
            />
            <button onClick={goBack}>VOLTAR</button>
            <button onClick={goToAdminHome}>AVANÇAR</button>
        </div>
    )
}