import axios from "axios";
import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  margin-top: 10vh;
  width: 100px;
  display:grid;
  justify-content: space-between;
  align-items: center;
  text-align: center;

`

const headers = {
  headers: {
    Authorization: "magdiel-silva-maryam",
  },
};

export default class GetAllPlaylist extends React.Component {
  state = {
    allPlaylist: [],
  };

  getAllPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios
      .get(url, headers)
      .then((response) => {
        this.setState({ allPlaylist: response.data.result.list });
        console.log(response.data.result.list);
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  functionAlert(id) {
    if (
      window.confirm(
        "Tem certeza que gostaria de remover essa playlist com as músicas que já foram adicionadas?"
      )
    ) {
      this.deletePlaylist(id);
    }
  }

  deletePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    axios
      .delete(url, headers)
      .then(() => {
        alert("Playlist removida com sucesso!");
        this.getAllPlaylist();
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  render() {
    const listaAllPlaylist = this.state.allPlaylist.map((data) => {
      return (
        <div>
          <StyledCard>
            <h2 key={data.id}>{data.name}</h2>
          <button onClick={() => this.functionAlert(data.id)}>
            Remover Playlist
          </button>
          </StyledCard>
        </div>
      );
    });

    return (
      <div>
      <button onClick={this.getAllPlaylist}> Playlists adicionadas</button>
        {listaAllPlaylist}
      </div>
    );
  }
}
