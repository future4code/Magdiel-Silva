
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyledMatchesList,
  StyledCard,
  StyledProfileImage,
  StyledLogo,
  StyledProfile,
  StyledHome,
  StyledButton,
  StyledBottonHoover,
} from "./Styled";

const aluno = "magdiel-silva-maryam";

export const MatchesPage = (props) => {
  const [matchesList, setMatchesList] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`
      )
      .then((response) => {
        setMatchesList(response.data.matches);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const listMatches = matchesList.map((match) => {
    return (
      <StyledProfile>
        <StyledProfileImage src={match.photo} />
        <p>{match.name}</p>
      </StyledProfile>
    );
  });

  const limparMatches = () => {
    alert("Esse botão vai limpar os matches!");
    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`
      )
      .then((response) => {
        alert(response.data.message);
        getMatches();
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <StyledHome>
      <StyledLogo>astro match</StyledLogo>
      <StyledCard>
        <StyledMatchesList>{listMatches}</StyledMatchesList>
      </StyledCard>
      <StyledButton onClick={props.matches}>voltar</StyledButton>
      <StyledButton onClick={limparMatches}>limpar matches💔</StyledButton>
    </StyledHome>
  );
};
