import axios from "axios";
import React from "react";

const headers = {
  headers: {
    Authorization: "magdiel-silva-maryam",
  },
};

export default class AddTrackToPlaylist extends React.Component {
  state = {
    name: "",
    artist: "",
    url: "",
  };
  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };
  onChangeArtist = (event) => {
    this.setState({ artist: event.target.value });
  };
  onChangeUrl = (event) => {
    this.setState({ url: event.target.value });
  };

  addTrackToPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };

    axios
      .post(url, body, headers)
      .then(() => {
        alert("Música adicionada com sucesso à sua Playlist!");
      })
      .catch((error) => {
        alert(error.response);
      });
  };
  render() {
    return (
      <div>
        <button onClick={() => this.addTrackToPlaylist(data.id)}>
          {" "}
          Confirmar
        </button>
        <input
          placeholder={"Coloque aqui o nome da música"}
          value={this.state.name}
          onChange={this.onChangeName}
        />
        <input
          placeholder={"Coloque aqui o nome do artista ou banda"}
          value={this.state.artist}
          onChange={this.onChangeArtist}
        />
        <input
          placeholder={"Coloque aqui a url da música"}
          value={this.state.url}
          onChange={this.onChangeUrl}
        />
      </div>
    );
  }
}
