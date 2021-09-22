import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React from "react";
import styled from "styled-components";
import { render } from "@testing-library/react";

const headers = {
  headers: {
    Authorization: "magdiel-silva-maryam",
  },
};

const StyledLabenusers = styled.div`
  display: grid;
  justify-content: center;
  border-radius: 5px;
`;
const StyledButtom = styled.div`
  color: aqua;
  font-family: "Roboto";
`;

export default class App extends React.Component {
  state = {
    cadastro: [],
    inputNovoNome: "",
    inputNovoEmail: "",
  };

  componentDidMount() {
    this.getAllUsers();
  }

  handleInputNovoNome = (event) => {
    this.setState({ inputNovoNome: event.target.value });
  };

  handleInputNovoEmail = (event) => {
    this.setState({ inputNovoEmail: event.target.value });
  };

  getAllUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, headers)
      .then((response) => {
        console.log(response.data);
        this.setState({cadastro: response.data})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  createUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.inputNovoNome,
      email: this.state.inputNovoEmail,
    };
    axios
      .post(url, body, headers)
      .then(() => {
        alert("Cadastro concluído com sucesso!");
        this.setState({inputNovoNome:"",})
        this.setState({inputNovoEmail:"",})
        this.getAllUsers();
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  render() {
    const listaDeCadastro = this.state.cadastro.map((dados) => {
      return <p key={dados.id}>{dados.name}</p>;
      
    });
    return (
      <StyledLabenusers>
        <h1>formulario</h1>
        <div>
          <label>
            Nome:
            <input
              value={this.state.inputNovoNome}
              onChange={this.handleInputNovoNome}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              value={this.state.inputNovoEmail}
              onChange={this.handleInputNovoEmail}
            />
          </label>
        </div>
        <StyledButtom>
          <button onClick={this.createUser}>Adicionar</button>
        </StyledButtom>
        <div>{listaDeCadastro}</div>
      </StyledLabenusers>
    );
  }
}
