import React, { useState } from "react";
import axios from "axios";
import {Header} from "./Styled"
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

export const TripDetailsPage = () => {
    const [trip, setTrip] = useState({})
    const params = useParams()
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if (token === null){
            history.push("/login")
        }
    }, [])

    useEffect(()=> {
        const token = localStorage.getItem("token")
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/magdiel-silva-maryam/trip/${params.id}`

       axios.get(url, {
           headers:{
               auth: token
           }
       }) 
       .then((res)=>{
        console.log(res.data.trip)
        setTrip(res.data.trip)
       })
       .catch((error)=>{
           console.log(error.response)
       })
    }, [])
    
// FAZER A RENDERIZAÇÃO DOS CANDIDATOS!!! E DO DETALHE DA VIAGEM
    const goBack = () => {
        history.goBack()
    }

    //FAZER BOTÃO PARA APROVAR CANDIDATOS.
    return(
        <div>
            <Header>
            <h1>TripDetailsPage</h1>
            </Header>
            <button onClick={goBack}>VOLTAR</button>
            <button>APROVAR CANDIDATOS</button>
        </div>
    )
}