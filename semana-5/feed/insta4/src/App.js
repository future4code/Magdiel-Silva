import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Formulario = styled.div `
  margin-top: 10vh;
  margin-bottom: 5vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

state = {
  post: [ 
  {
    nomeUsuario: "Paulinha",
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost: "https://picsum.photos/200/150"
  },
  {
    nomeUsuario: "Magdiel",
    fotoUsuario: "https://picsum.photos/50/51",
    fotoPost: "https://picsum.photos/200/151"
  },
  {
    nomeUsuario: "Jaqueline",
    fotoUsuario: "https://picsum.photos/50/52",
    fotoPost: "https://picsum.photos/200/152"
  }
],
    valorInputNomeUsuario:"",
    valorInputFotoUsuario: "",
    valorInputFotoPost:""
}
  adicionarPost = () => {
  let novoPost = 
  {
    nomeUsuario: this.state.valorInputNomeUsuario,
    fotoUsuario: this.state.valorInputFotoUsuario,
    fotoPost: this.state.valorInputFotoPost,
  }

   novoPost = [...this.state.post,novoPost]

  this.setState({
    post: novoPost,
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  })
}
  onChangeInputNomeUsuario = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value})
  }
  onChangeInputFotoUsuario = (event)=> {
    this.setState({valorInputFotoUsuario: event.target.value})
  }
  onChangeInputFotoPost = (event)=> {
    this.setState({valorInputFotoPost: event.target.value})
  }

  render() {
    const componentsPosts = this.state.post.map((item) => {
      return <Post
      nomeUsuario = {item.nomeUsuario}
      fotoUsuario = { item.fotoUsuario}
      fotoPost = { item.fotoPost} /> 
    })
   
    return (
  <div>
      <Formulario>
      <input
      value={this.state.valorInputNomeUsuario}
      onChange={this.onChangeInputNomeUsuario}
      placeholder={"Nome"}
      />
      <input
      value={this.state.valorInputFotoUsuario}
      onChange={this.onChangeInputFotoUsuario}
      placeholder={"Adicione o link para sua foto"}
      />
      <input
      value={this.state.valorInputFotoPost}
      onChange={this.onChangeInputFotoPost}
      placeholder={"Adicione o link para post"}
      />
      <button onClick={this.adicionarPost}>Adicionar</button>
      </Formulario>
      <MainContainer>
      {componentsPosts}
    </MainContainer>
  </div>

    );
  }
}








export default App;


