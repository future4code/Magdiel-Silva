import React from "react";
import styled from "styled-components";

const StyledCardMatches = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    height: 70vh;
    width: 30vw;
`

export const HomePage = (props) => {
return (
    <div>
        <StyledCardMatches>
        HomePage
        </StyledCardMatches>
        <button onClick={props.matchesList}>Matches</button>
    </div>
)


}