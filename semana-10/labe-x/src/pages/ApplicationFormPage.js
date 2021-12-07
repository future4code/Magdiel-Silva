import React from "react";
import { Header, Container, StyledInput, ButtonContainer } from "./Styled";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import { Button, TextField} from "@material-ui/core";
import axios from "axios";

export const ApplicationFormPage = () => {
    
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [applicationText, setApplicationText] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState([])

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
    return(
        <Container>
            <Header>
            <h1>Candidate-se</h1>
            <h3> Inscreva-se para uma viagem inesquecível </h3>
            </Header>
            <StyledInput>
            <TextField 
            label={"Nome:"}
            value={name}
            onChange={onChangeName}
            required
            />
            <TextField 
            label={"Idade:"}
            value={age}
            onChange={onChangeAge}
            required
            />
            <TextField 
            label={"Texto de candidatura:"}
            helperText="Diga por que você é um bom candidato"
            value={applicationText}
            onChange={onChangeApplicationText}
            required
            />
            <TextField 
            label={"Profissão:"}
            value={profession}
            onChange={onChangeProfession}
            required
            />
            <select value={country} onChange={onChangeCountry}>
            <option>Brasil</option>
            <option>Estados Unidos</option>
            <option>Argentina</option>
            <option>Uruguai</option>
            <option>Chile</option>
            <option>Espanha</option>
            <option>França</option>
            <option>Outros</option>
          </select>
            </StyledInput>
            <br/>
            <div>
            <ButtonContainer>
            <Button variant={"contained"} onClick={goBack}> VOLTAR </Button>
            <Button variant={"contained"} color={"primary"} onClick={apply}> ENVIAR </Button>
            </ButtonContainer>
            </div>
        </Container>
    )
}