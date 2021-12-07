import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

//---------- GlobalStyled

export const GlobalStyle = createGlobalStyle`
body{
    margin:0;
    padding: 0;
    background-image: url("/espaco.jpg");
}
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
export const Header = styled.div`
  font-family: "Roboto";
  font-size: 1.5rem;
  text-align: center;
  color: white;
`;

//---------- styled HomePage

export const Body = styled.div`
  margin-right: 40vw;
  height: 75vh;
  width: 40vw;
  color: white;
  font-family: "Roboto";
  font-size: 2.5rem;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap:20px;
`
//---------- styled Login

export const StyledInput = styled.form`
  background-color:  #ffffff70;
  border: 20px solid #ffffff05;
  color: white;
  margin-top: 5%;
  display: grid;
  justify-content: center;
  gap:15px;

`

//---------- styled AdminHomePage

export const CardStyle = styled.div`
  font-family: "Roboto";
  color: white;
  background-color: #00000095;
  text-align: center;
  display:grid;
  margin-bottom: 5vh;
  border: 1px solid black;
  width:20vw;
  padding: 20px;

`

export const ContainerCard = styled.div`
  margin-top: 10vh;
  margin-left: 2vw;
  margin-right: 2vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap:15px;
  max-width:100vw;


`
