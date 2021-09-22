import React from "react";
import axios from "axios";
import styled from "styled-components";

const BackForm = styled.div`
  background-image: url("img/back2.jpg");
  height: 100vh;
  width: 100vw;
`;
const StyledLabenusers = styled.div`
  font-family: "Roboto";
  color: white;
  display: grid;
  justify-content: center;
`;
const StyledButtom = styled.div`
  color: aqua;
  font-family: "Roboto";
`;
const headers = {
  headers: {
    Authorization: "magdiel-silva-maryam",
  },
};
export default class CadastroUsuario extends React.Component {
  state = {
    inputNovoNome: "",
    inputNovoEmail: "",
  };

  handleInputNovoNome = (event) => {
    this.setState({ inputNovoNome: event.target.value });
  };

  handleInputNovoEmail = (event) => {
    this.setState({ inputNovoEmail: event.target.value });
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
        this.setState({ inputNovoNome: "" });
        this.setState({ inputNovoEmail: "" });
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  render() {
    return (
      <BackForm>
        <StyledLabenusers>
          <h1>formulário</h1>
          <div>
            <label>
              Nome:
              <input
                value={this.state.inputNovoNome}
                onChange={this.handleInputNovoNome}
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Email:
              <input
                value={this.state.inputNovoEmail}
                onChange={this.handleInputNovoEmail}
              />
            </label>
          </div>
          <br />
          <StyledButtom>
            <button onClick={this.createUser}>Cadastrar</button>
          </StyledButtom>
          <StyledButtom>
            <button onClick={this.props.irParaLista}>
              {" "}
              Lista de Usuários Cadastrados
            </button>
          </StyledButtom>
        </StyledLabenusers>
      </BackForm>
    );
  }
}
