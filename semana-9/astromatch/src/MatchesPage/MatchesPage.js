import React from "react";
import styled from "styled-components";

const StyledMatchesList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid black;
  height: 70vh;
  width: 30vw;
`;

export const MatchesPage = (props) => {
  return (
  <div>
      <StyledMatchesList>
      MatchesPage
      </StyledMatchesList>
      <button onClick={props.matches}>Matches</button>
    </div>
);
};
