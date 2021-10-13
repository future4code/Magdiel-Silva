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

//---------- styled PageHome

export const Body = styled.div`
  height: 70vh;
`;

//---------- styled PageHome
