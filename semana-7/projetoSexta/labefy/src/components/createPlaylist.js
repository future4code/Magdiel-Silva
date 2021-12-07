import axios from "axios";
import React from "react";
import styled from "styled-components";

const StyledFundo = styled.div`
  height: 10vh;
  width: 0vw;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;
const StyledLogo = styled.div`
  display: center;
  font-size: 2.5rem;
  margin-left: 10%;
  color: white;
  height: 10vh;
  width: 70vw;
`;
const StyledInput = styled.div`
  display:inline;
  color: black;
  background-color: white;
`;
const headers = {
  headers: {
    Authorization: "magdiel-silva-maryam",
  },
};

export default class CreatePlaylist extends React.Component {
  state = {
    playlist: "",
  };

  onChangePlaylist = (event) => [
    this.setState({ playlist: event.target.value }),
  ];

  createPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    const body = {
      name: this.state.playlist,
    };

    axios
      .post(url, body, headers)
      .then((response) => {
        console.log(response.data);
        alert("Playlist adicionada com sucesso");
        this.setState({ playlist: "" });
      })
      .catch((error) => {
        alert(error.response.message);
      });
  };

  render() {
    return (
      <div>
        <StyledFundo>
          <StyledLogo>
            <h1>labefy</h1>
          </StyledLogo>
        </StyledFundo>
        <div>
          <StyledInput>
            <input
              placeholder={"Nome da Playlist"}
              value={this.state.playlist}
              onChange={this.onChangePlaylist}
            />
            </StyledInput>
            <button onClick={this.createPlaylist}>Adicionar</button>
        </div>
      </div>
    );
  }
}
