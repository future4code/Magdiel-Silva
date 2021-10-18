import React, { useState, useEffect } from "react";
import {ContainerCard, Header, CardStyle, Container} from "./Styled"
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";


export const ListTripsPage = () => {
    const [trips, setTrips] = useState([])

    const history = useHistory()

    useEffect(()=>{
        const url= "https://us-central1-labenu-apis.cloudfunctions.net/labeX/magdiel-silva-maryam/trips"
        axios
        .get(url)
        .then((res)=>[
            setTrips(res.data.trips)
        ])
        .catch((error)=>{
            console.log("deu erro!", error)
        })
    }, []);

    const goBack = () => {
        history.goBack()
    }
    
    const renderizaViagem = trips.map((trip) => {
        const goToApplicationForm = () => {
            history.push(`/trips/application/${trip.id}`)
        }
        return(
            <div key={trip.id}>
        <CardStyle>
          <h3>{trip.name}</h3>
          <p>descrição: {trip.description}</p>
          <p> duração: {trip.durationInDays} dias</p>
          <p> Data: {trip.date} </p>
          <p>Planeta de destino: {trip.planet}</p>
          <Button variant={"contained"} color={"primary"} onClick={goToApplicationForm}>CANDIDATE-SE</Button>{" "}
        </CardStyle>
      </div>

        )
    })

    return(
        <Container>
            <Header>
            <h1>Nossas viagens</h1>
            </Header>
            <Button variant={"contained"}  onClick={goBack}>VOLTAR</Button>
            <ContainerCard>
                {renderizaViagem}
            </ContainerCard>
        </Container>
    )
}