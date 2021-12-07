
import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledCardMatches, StyledPerfil, StyledProfileImage, StyledLogo, StyledButton, StyledHome } from "./Styled";

const aluno = "magdiel-silva-maryam";

export const HomePage = (props) => {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    pegarPerfil();
  }, []);

  const pegarPerfil = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`
      )
      .then((res) => {
        setPerfil(res.data.profile);
      })
      .catch((error) => alert(error.response));
  };

  const clickMatch = (perfilId, choiceId) => {
    const headers = "Content-Type: application/json"
    const body = {
      "id": perfilId,
      "choice":choiceId
    }
    axios
    .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body, headers)
    .then((response)=>{
      pegarPerfil()
      if (response.data.isMatch === true){
        alert(`Deu Match! Você já pode conversar com ${perfil.name}`)
      }
    })
    .catch((error)=>{
      alert(error)
    })
  }
  return (
    <StyledHome>
        <StyledLogo>
        astro match
        </StyledLogo>
      <StyledCardMatches>
        <StyledPerfil>
          <StyledProfileImage src={perfil.photo} />
          <h2>{perfil.name}</h2>
          <p>Idade: {perfil.age} anos</p>
          <p>{perfil.bio} </p>
          <div>
            <button onClick={() => clickMatch (perfil.id, true)}>💚</button>
            <button onClick={() => clickMatch(perfil.id, false)}>❌</button>
          </div>
        </StyledPerfil>
        </StyledCardMatches>
        <StyledButton onClick={props.matchesList}>matches❤</StyledButton>
    </StyledHome>
  );
};