import React, { useState } from "react";
import { HomePage } from "./HomePage/HomePage";
import { MatchesPage } from "./MatchesPage/MatchesPage";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
  body{
    margin:0;
    padding:0;
    background-image: url("img/fundoTela2.jpg");
  }
`

 const App = () => {
  const [telaAtual, setTelaAtual] = useState("1");
  const renderizaPagina = () => {
    if (telaAtual === "1") {
      return <HomePage matchesList={matchesList}/>;
    } else if (telaAtual === "2") {
      return <MatchesPage matches={matches}/>;
    } else {
      return "Página não encontrada";
    }
  };
 const matchesList = () => {
   setTelaAtual("2")
 }
 const matches = () => {
   setTelaAtual("1")
 }
 
  return(
<div>
  <GlobalStyle/>
{renderizaPagina()}
</div>
  )
  
};

export default App;
