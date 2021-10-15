import React from "react";
import axios from "axios";
import {useState} from "react";
import {Header, StyledInput} from "./Styled"
import { useHistory } from "react-router-dom";

export const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
     
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value);
        
    }

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/magdiel-silva-maryam/login"
    const onSubmitLogin = () => {
        console.log(email, password)
        const body = {
            email: email,
            password: password
        }
        axios.post(url, body)
        .then((res)=> {
          console.log (res.data)
          localStorage.setItem("token", res.data.token)
          goToAdminHome()
        })
        .catch((error)=>{
            alert("Erro de login ou senha!", error)
        })
    }

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
            <StyledInput>
            <input 
            placeholder="Email:"
            type="email"
            value={email}
            onChange={onChangeEmail}
            />
              <input 
            placeholder="Senha:"
            type="password"
            value={password}
            onChange={onChangePassword}
            />
            <button onClick={goBack}>VOLTAR</button>
            <button onClick={onSubmitLogin}>ENVIAR</button>
            </StyledInput>
        </div>
    )
}