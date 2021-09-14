import React from "react";
import styled from "styled-components";
import ListaEscolaridade from "./ListaEscolaridade";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 5vh;
`;

export default class Etapa1 extends React.Component {
  state = {
    nome: "",
    idade: "",
    email: "",
    escolaridade: "",
  };

  onChangeInputNome = (event) => {
    return this.setState({ nome: event.target.value });
  };
  onChangeInputIdade = (event) => {
    return this.setState({ idade: event.target.value });
  };
  onChangeInputEmail = (event) => {
    return this.setState({ email: event.target.value });
  };
  onChangeInputEscolaridade = (event) => {
    return this.setState({ escolaridade: event.target.value });
  };

  render() {
    return (
      <Layout>
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <h3>1. Qual é o seu nome?</h3>
        <input
          value={this.state.nome}
          onChange={this.onChangeInputNome}
          placeholder={"Nome"}
        />
        <h3>2. Qual é a sua idade?</h3>
        <input
          value={this.state.idade}
          onChange={this.onChangeInputIdade}
          placeholder={"Idade"}
        />
        <h3>3. Qual é o seu email?</h3>
        <input
          value={this.state.email}
          onChange={this.onChangeInputEmail}
          placeholder={"Email"}
        />
        <h3>4. Qual a sua escolaridade?</h3>
        <ListaEscolaridade />
      </Layout>
    );
  }
}
