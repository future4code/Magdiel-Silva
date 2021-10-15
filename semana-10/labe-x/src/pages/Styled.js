import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

//---------- GlobalStyled

export const GlobalStyle = createGlobalStyle`
body{
    margin:0;
    padding: 0;
}
`;
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
export const Header = styled.div`
  text-align: center;
  height: 15vh;
  width: 100vw;
  background-color: black;
  color: white;
`;

//---------- styled HomePage

export const Body = styled.div`
  height: 70vh;
`;

//---------- styled Login

export const StyledInput = styled.div`
  margin-top: 5%;
  display: grid;
  justify-content: center;

`

//---------- styled AdminHomePage

export const CardStyle = styled.div`
  font-family: "Roboto";
  text-align: center;
  display:grid;
  margin-bottom: 5vh;
  border: 1px solid black;
  width:30vw;
`

export const ContainerCard = styled.div`
  margin-top: 10vh;
  margin-left: 2vw;
  margin-right: 2vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 100%;

`
