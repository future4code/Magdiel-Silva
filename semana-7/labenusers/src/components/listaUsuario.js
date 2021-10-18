import axios from "axios";
import React from "react";
import styled from "styled-components";

const BackForm = styled.div`
  background-image: url("img/back2.jpg");
  height: 100vh;
  width: 100vw;
`;

const StyledLabenusers = styled.div`
  color: white;
  font-family: "Roboto";
  display: grid;
  justify-content: center;
`;

const StyledButtom = styled.div`
  margin-top: 50px;
  font-family: "Roboto";
`;

const headers = {
  headers: {
    Authorization: "magdiel-silva-maryam",
  },
};

const StyledListaDeCadastro = styled.div`
  display: flex;
  font-family: "Roboto";
  padding: 2px;
  justify-content: space-between;
  margin: 10px;
  width: 200px;
`;


export default class ListaUsuario extends React.Component {
  state = {
    cadastro: [],
  };

  componentDidMount() {
    this.getAllUsers();
  }
  getAllUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, headers)
      .then((response) => {
        this.setState({ cadastro: response.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  functionAlert(id){
    if (window.confirm("Tem certeza que gostaria de remover esse cadastro?")){
      this.deleteUser(id)
    }
  }

  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios
      .delete(url, headers)
      .then(() => {
        alert("Cadastro removido com sucesso!");
        this.getAllUsers();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
 
  render() {
    const listaDeCadastro = this.state.cadastro.map((dados) => {
      return (
        <StyledListaDeCadastro key={dados.id}>
          {dados.name}
          <button onClick={() => this.functionAlert(dados.id)}> X </button>
          
        </StyledListaDeCadastro>
      );
    });


    return (
      <BackForm>
        <StyledLabenusers>
          <StyledButtom>
            <button onClick={this.props.irParaCadastro}>
              Realizar novos cadastros
            </button>
          </StyledButtom>
          {listaDeCadastro}
        </StyledLabenusers>
      </BackForm>
    );
  }
}
