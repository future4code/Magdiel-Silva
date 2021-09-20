import logo from "./logo.svg";
import "./App.css";
import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";


const Botao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 5vh;
`;

function App() {
  return (
    <div>
      <Etapa1 />
      <Botao>
        <button>Próxima Etapa</button>
      </Botao>
      <Etapa2 />
      <Botao>
        <button>Próxima Etapa</button>
      </Botao>
      <Etapa3 />
      <Botao>
        <button>Próxima Etapa</button>
      </Botao>
      <Final />
    </div>
  );
}


export default App;
