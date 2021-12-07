import React from "react";
import CadastroUsuario from "./components/cadastroUsuario";
import ListaUsuario from "./components/listaUsuario";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
  body{
    margin:0;
    padding:0;
  }
`
export default class App extends React.Component {
  state = {
    telaAtual:"cadastro",
  };

  escolheTela = () => {
    if (this.state.telaAtual === "cadastro") {
      return <CadastroUsuario irParaLista={this.irParaLista}/>
    }  else if 
      (this.state.telaAtual === "lista") {
        return <ListaUsuario irParaCadastro={this.irParaCadastro}/>
    } else {
        return("erro! página não encontrada")
      }
    }

  irParaCadastro = () =>{
    this.setState({telaAtual:"cadastro"})
  }

  irParaLista = () =>{
    this.setState({telaAtual:"lista"})

  }
  render() {
    return (
      <div>
      <GlobalStyle/>
        {this.escolheTela()}
      </div>
    );
  }
}
