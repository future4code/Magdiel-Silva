import styled from "styled-components";

export const StyledHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const StyledCard = styled.div`
  margin-top: 2vh;
  font-family: "Roboto";
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items:center;
`;
export const StyledMatchesList = styled.div`
  font-family: "Roboto";
  font-size: 1rem;  
  display: grid;
  grid-template-columns: 1fr ;
  height:80vh;
  width: 25vw;
  border-radius: 5%;
  background-color: #ffffff90;
`;
export const StyledLogo = styled.div`
  font-family: "Satisfy", cursive;
  color:white;
  font-size: 4rem;
  margin-top:2vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledProfileImage = styled.img`
  max-height: 100px;
  max-width: 100px;
  border-radius:10%;
  padding:10px
`
export const StyledProfile = styled.div`
  display: flex;
  justify-content: space-between;
`
export const StyledButton = styled.button`
    background-color: #800080;
    color: white;
    width: 10vw;
    margin: 10px;

`