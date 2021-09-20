import React from "react";
import styled from "styled-components"

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 5vh;
`;

export default class Etapa3 extends React.Component {
    state = {
        terminarGraduacao: "",
        cursoComplementar: "",
    };

    onChangeInputTerminarGraduacao = (event) => {
        return this.setState({ terminarGraduacao: event.target.value });
      };
      onChangeInputCursoComplementar = (event) => {
        return this.setState({ cursoComplementar: event.target.value });
      };

    render() {
        return (
            <Layout>
              <h2>ETAPA 3 - INFORMAÇÕES GERAIS DO ENSINO</h2>
              <h3>5. Por que você não terminou um curso de graduação?</h3>
              <input
                value={this.state.terminarGraduacao}
                onChange={this.onChangeInputTerminarGraduacao}
              />
              <h3>6. Você fez algum curso complementar?</h3>
              <input
                value={this.state.cursoComplementar}
                onChange={this.onChangeInputCursoComplementar}/>
           </Layout>
          )
    }
}