import React from "react";
import styled from "styled-components"

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 5vh;
`;

export default class Final extends React.Component {

    render() {
        return (
            <Layout>
              <h1>O FORMULÁRIO ACABOU</h1>
              <h2>Muito obrigado por participar! Entraremos em contato!</h2>
           </Layout>
          )
    }
}