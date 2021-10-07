import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledCardMatches, StyledPerfil, StyledProfileImage, StyledLogo } from "./Styled";

const aluno = "magdiel-silva-maryam";

export const HomePage = (props) => {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    pegarPerfil();
  }, []);

  const pegarPerfil = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${aluno}/person`
      )
      .then((res) => {
        setPerfil(res.data.profile);
      })
      .catch((error) => alert(error.response));
  };
  return (
    <div>
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
            <button>💖</button>
            <button>❌</button>
          </div>
        </StyledPerfil>
      </StyledCardMatches>
      <button onClick={props.matchesList}>Ir para Matches</button>
    </div>
  );
};
