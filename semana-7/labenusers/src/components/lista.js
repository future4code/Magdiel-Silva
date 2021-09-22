import axios from "axios";
import React from "react";
import styled from "styled-components";

const headers = {
  headers: {
    Authorization: "magdiel-silva-maryam",
  },
};

export default class Lista extends React.Component {
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
        this.setState({ cadastro: response.data.result.list });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    const listaDeCadastro = this.state.cadastro.map((dados) => {
      return <l1 key={dados.id}>{dados.name}</l1>;
    });

    return <div> {listaDeCadastro}</div>;
  }
}
