import React from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    background-image: url("img/back.jpg");
  }
`;
const StyleText = styled.div`
  font-family: "Roboto";
  margin-top: 15%;
  margin-left: 25%;
  color: white;
  font-size: 3hr;
  display: block;
  justify-content: center;
  width: 50%;


`;

export default class App extends React.Component {
  state = {
    dataName: [],
    nome: "",
  };
  updateName = (event) => {
    this.setState({ nome: event.target.value });
  };

  atualizaPagina = () => {
    this.setState({ dataName: [] });
  };

  getDataName = () => {
    const nome = this.state.nome;
    const url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data[0].res);
        this.setState({ dataName: response.data[0].res });
        this.setState({ nome: "" });
      })
      .catch(() => {
        alert("Nome não encontrado no banco de dados");
      });
  };

  render() {
    const dataList = this.state.dataName.map((dados) => {
      return (
        <table>
          <tr>
            <th>Na década de: {dados.periodo}</th>
          </tr>
          <tr>
            <th>Quantidade: {dados.frequencia}</th>
          </tr>
          <hr />
        </table>
      );
    });

    return (
      <div>
        <GlobalStyle />
        <StyleText>
        <h1>
          Descubra quantas pessoas no Brasil tiveram o mesmo nome que você desde
          1930 até 2010.
        </h1>
        <input
          placeholder="Insira o seu nome"
          value={this.state.nome}
          onChange={this.updateName}
        />
        <button onClick={this.getDataName}>Pesquisar</button>
        <hr />
        {dataList}
        <button onClick={this.atualizaPagina}>Fazer uma nova pesquisa</button>
        <br/>
        <br/>
        </StyleText>
      </div>
    );
  }
}
