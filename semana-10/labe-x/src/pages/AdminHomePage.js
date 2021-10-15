import React from "react";
import { Header, CardStyle, ContainerCard } from "./Styled";
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

  //FAZER FUNÇÃO/BOTÃO PARA LOGOUT
  //FAZER FUNÇÃO/BOTÃO PARA EXCLUIR VIAGEM

  const renderizaViagem = trips.map((trip) => {
    const goToTripDetails = () => {
      history.push(`/admin/trips/${trip.id}`);
    };
    return (
      <div key={trip.id}>
        <CardStyle>
          <h3>{trip.name}</h3>
          <p>descrição: {trip.description}</p>
          <p> duração: {trip.durationInDays} dias</p>
          <p> Data: {trip.date} </p>
          <p>Planeta de destino: {trip.planet}</p>
          <button onClick={goToTripDetails}>DETALHES</button>{" "}
          <button>EXCLUIR VIAGEM</button>
        </CardStyle>
      </div>
    );
  });
  return (
    <div>
      <Header>
        <h1>Perfil Administrador</h1>
      </Header>
      <button onClick={goBack}>VOLTAR</button>
      <button onClick={goToCreateTrip}>CRIAR NOVA VIAGEM</button>
      <button>LOGOUT</button>
      <button>EXCLUIR</button>
      <ContainerCard>{renderizaViagem}</ContainerCard>
    </div>
  );
};
