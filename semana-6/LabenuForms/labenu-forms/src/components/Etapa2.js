import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 5vh;
`;

export default class Etapa2 extends React.Component {
  state = {
    curso: "",
    ensino: "",
  };

  onChangeInputCurso = (event) => {
    return this.setState({ curso: event.target.value });
  };
  onChangeInputEnsino = (event) => {
    return this.setState({ ensino: event.target.value });
  };

  render() {
    return (
      <Layout>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <h3>5. Qual curso?</h3>
        <input
          value={this.state.curso}
          onChange={this.onChangeInputCurso}
          placeholder={"Curso"}
        />
        <h3>6. Qual a unidade de ensino?</h3>
        <input
          value={this.state.ensino}
          onChange={this.onChangeInputEnsino}
          placeholder={"Unidade de Ensino"}
        />
      </Layout>
    );
  }
}
