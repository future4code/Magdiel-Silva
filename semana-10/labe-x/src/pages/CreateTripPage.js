import React, { useState } from "react";
import { Header, StyledInput, Container } from "./Styled";
import { Button, TextField} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export const CreateTripPage = () => {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [durationInDays, setDurationInDays] = useState();

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangePlanet = (event) => {
    setPlanet(event.target.value);
  };
  const onChangeDate = (event) => {
    setDate(event.target.value);
  };
  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const onChangedurationInDays = (event) => {
    setDurationInDays(event.target.value);
  };
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  const createTrip = () => {
    const token = localStorage.getItem("token");
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/magdiel-silva-maryam/trips`
    const body = {
        name: name,
        planet: planet,
        date: date,
        description: description,
        durationInDays: Number(durationInDays)
    }
    axios
    .post(url, body, {
        headers: {
          auth: token,
        }
    })
      .then((res)=>{
        alert("Viagem criada com sucesso", res)
      })
      .catch((error)=>{
          alert("Erro para cadastrar a viagem", error)
      })
}
  const goBack = () => {
    history.goBack();
  };
  return (
    <Container>
      <Header>
        <h1>Criar viagem</h1>
      </Header>
      <Button  variant={"contained"} color={"primary"} onClick={goBack}>VOLTAR</Button>
        <StyledInput>
          <TextField
            label={"Nome da viagem"}
            value={name}
            onChange={onChangeName}
            required
          />
          <select value={planet} onChange={onChangePlanet}>
            <option>Mercúrio</option>
            <option>Vênus</option>
            <option>Terra</option>
            <option>Marte</option>
            <option>Júpiter</option>
            <option>Saturno</option>
            <option>Urano</option>
            <option>Netuno</option>
          </select>
          <TextField
            id={"date"}
            type={"date"}
            value={date}
            onChange={onChangeDate}
            required
          />
          <TextField
            label={"Descrição da viagem"}
            value={description}
            onChange={onChangeDescription}
            required
          />
          <TextField
            type="number"
            label={"Duração da viagem"}
            value={durationInDays}
            onChange={onChangedurationInDays}
            required
          />
          <Button variant={"contained"} color={"primary"}  onClick={createTrip}>CADASTRAR</Button>
        </StyledInput>
    </Container>
  );
};
