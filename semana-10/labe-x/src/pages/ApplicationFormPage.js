import React from "react";
import { Header } from "./Styled";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const ApplicationFormPage = (props) => {
    console.log(props)
    
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [applicationText, setApplicationText] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState([props.lista])
//arrumar o country 
    const onChangeName = (event) => {
        setName(event.target.value)
    } 
    const onChangeAge = (event) => {
        setAge(event.target.value)
    }
    const onChangeApplicationText = (event) => {
        setApplicationText(event.target.value)
    }
    const onChangeProfession = (event) => {
        setProfession(event.target.value)
    }
    const onChangeCountry = (event) => {
        setCountry(event.target.value)
    }

    const history = useHistory()
    const params = useParams();


    const apply = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/magdiel-silva-maryam/trips/${params.id}/apply`
        const body = {
            name: name,
            age: age,
            applicationText: applicationText,
            profession: profession,
            country: country
        }
        axios.post(url, body)
        .then((res) => {
            console.log(res.data)
            alert("Cadastro realizado com sucesso!")
        })
        .catch((error)=> {
            alert(error.message)
        })
    }
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
            <input 
            placeholder="Nome:"
            value={name}
            onChange={onChangeName}
            />
            <input 
            placeholder="Idade:"
            value={age}
            onChange={onChangeAge}
            />
            <input 
            placeholder="Texto de candidatura:"
            value={applicationText}
            onChange={onChangeApplicationText}
            />
            <input 
            placeholder="Profissão:"
            value={profession}
            onChange={onChangeProfession}
            />
            <select>
                <option>PAÍS 1</option>
                <option>PAÍS 2</option>
                <option>PAÍS 3</option>
                <option>PAÍS 4</option>
            </select>
            <button onClick={goBack}> VOLTAR </button>
            <button onClick={apply}> ENVIAR </button>
        </div>
    )
}