import React from "react";
import { Header, CardStyle, ContainerCard, Container, ButtonContainer } from "./Styled";
import {Button} from "@material-ui/core"
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const AdminHomePage = () => {
  const [trips, setTrips] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, []);

  useEffect(() => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/magdiel-silva-maryam/trips";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.trips);
        setTrips(res.data.trips);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  const goBack = () => {
    history.goBack();
  };
  const goToCreateTrip = () => {
    history.push("/admin/trips/create");
  };
  const renderizaViagem = trips.map((trip) => {
    const goToTripDetails = () => {
      history.push(`/admin/trips/${trip.id}`);
    }
    const DeleteTrip = () => {
      const token = localStorage.getItem("token");
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/magdiel-silva-maryam/trips/${trip.id}`
      axios.delete(url, {
        headers: {
          auth: token,
        }})
      .then((res)=>{
        alert("Viagem excluída com sucesso", res)
      })
    }


    return (
      <div key={trip.id}>
        <CardStyle>
          <h3><b>{trip.name}</b></h3>
          <p><b>descrição:</b> {trip.description}</p>
          <p><b> duração:</b> {trip.durationInDays} dias</p>
          <p><b> Data:</b> {trip.date} </p>
          <p><b>Planeta de destino:</b> {trip.planet}</p>
          <ButtonContainer>
          <Button variant={"contained"} onClick={goToTripDetails}>DETALHES</Button>{" "}
          <Button variant={"contained"} color={"primary"} onClick={DeleteTrip}>EXCLUIR VIAGEM</Button>
          </ButtonContainer>
        </CardStyle>
      </div>
    );
  });
  return (
    <Container>
      <Header>
        <h3>Perfil Administrador</h3>
      </Header>
      <ButtonContainer>
      <Button variant={"contained"}  onClick={goBack}>VOLTAR</Button>
      <Button variant={"contained"}  onClick={goToCreateTrip}>CRIAR NOVA VIAGEM</Button>
      </ButtonContainer>
      <ContainerCard>{renderizaViagem}</ContainerCard>
    </Container>
  );
};
