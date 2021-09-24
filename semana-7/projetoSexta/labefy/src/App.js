import './App.css';
import React from 'react';
import CreatePlaylist from './components/createPlaylist';
import GetAllPlaylist from './components/getAllPlaylist';
import { createGlobalStyle } from 'styled-components';
import  styled  from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding: 0;
  background-image: url('img/fundo2.jpg');
}
`

const StyledLabefy = styled.div`
display: grid;
justify-content: center;
font-family: "Roboto";
`

export default class App extends React.Component {
  render(){
    return (
      <div>
        <GlobalStyle/>
        <StyledLabefy>
        <CreatePlaylist/>
        <GetAllPlaylist/>
        </StyledLabefy>
      </div>
    );
  }
  
}

