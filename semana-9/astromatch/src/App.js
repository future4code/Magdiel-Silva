import React, { useState } from "react";
import { HomePage } from "./HomePage/HomePage";
import { MatchesPage } from "./MatchesPage/MatchesPage";

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
  const limparMatches = () => {
    alert("Esse botão vai limpar os matches!")
  }
 const matchesList = () => {
   setTelaAtual("2")
 }
 const matches = () => {
   setTelaAtual("1")
 }
  return <div>
    {renderizaPagina()}
    <button onClick ={limparMatches}>Limpar Matches</button>
  </div>;
};

export default App;
