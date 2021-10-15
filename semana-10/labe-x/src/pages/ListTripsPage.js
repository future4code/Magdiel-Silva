import React, { useState, useEffect } from "react";
import {ContainerCard, Header, CardStyle} from "./Styled"
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
          <button onClick={goToApplicationForm}>CANDIDATE-SE</button>{" "}
        </CardStyle>
      </div>

        )
    })

    return(
        <div>
            <Header>
            <h1>Nossas viagens</h1>
            </Header>
            <ContainerCard>
                {renderizaViagem}
            </ContainerCard>
            <button onClick={goBack}>VOLTAR</button>
        </div>
    )
}