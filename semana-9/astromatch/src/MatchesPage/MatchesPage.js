import React from "react";
import styled from "styled-components";

const StyledMatchesList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid black;
  height: 80vh;
  width: 25vw;
`;

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border:1px solid black;
  height: 20vh;
  width: 20vw;
`;

export const MatchesPage = (props) => {
  return (
    <div>
      <StyledMatchesList>
        MatchesPage
        <StyledCard>
          Nome Pessoa
        </StyledCard>
        </StyledMatchesList>
      <button onClick={props.matches}>Ir para home</button>
    </div>
  );
};
