import React, { useState } from "react";
import axios from "axios";
import { Header, CardStyle, ContainerCard } from "./Styled";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

export const TripDetailsPage = () => {
  const [trip, setTrip] = useState({});
  const [candidates, setCandidates] = useState([]);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/magdiel-silva-maryam/trip/${params.id}`;
    axios
      .get(url, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        console.log(res.data.trip);
        setTrip(res.data.trip);
        setCandidates(res.data.trip.candidates);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  const goBack = () => {
    history.goBack();
  };
  const renderizaDetalhes = () => {
    return (
      <div key={trip.id}>
        <CardStyle>
          <h1>{trip.name} </h1>
          <p>
            <b>Descrição:</b> {trip.description}
          </p>
          <p>
            <b>Planeta destino:</b> {trip.planet}{" "}
          </p>
          <p>
            <b>Data de embarque:</b> {trip.date}
          </p>
          <p>
            <b>Duração da viagem:</b> {trip.durationInDays} dias
          </p>
        </CardStyle>
      </div>
    );
  };
  const renderizaCandidatos = candidates.map((candidates) => {
    return (
      <div key={candidates.name}>
        <CardStyle>
          <p>
            <b>Nome:</b> {candidates.name}
          </p>
          <p>
            <b>Idade:</b> {candidates.age}
          </p>
          <p>
            <b>País de origem:</b> {candidates.country}
          </p>
          <p>
            <b>Profissão:</b> {candidates.profession}
          </p>
          <p>
            <b>Motivação:</b> {candidates.applicationText}
          </p>
          <button>Aprovar candidato!</button>
        </CardStyle>

      </div>
    );
  });

  return (
    <div>
      <Header>
        <h1>Detalhes da viagem</h1>
      </Header>
      <ContainerCard>{renderizaDetalhes()}</ContainerCard>
      <ContainerCard>
      <h2>Lista de candidatos:</h2>
          {renderizaCandidatos}
    </ContainerCard>
      <button onClick={goBack}>VOLTAR</button>
    </div>
  );
};
