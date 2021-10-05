import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";

const App = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    getPokemon();
  }, [pokeName]);

  const getPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        setPokeList(response.data.results);
      })
      .catch((error) => {
        alert(error.response);
      });
  };
  const onChangePokeName = (event) => {
    setPokeName(event.target.value);
  };
  const listaPokemons = pokeList.map((pokemon) => {
    return (
      <option key={pokemon.name} value={pokemon.name}>
        {pokemon.name}
      </option>
    );
  });
  return (
    <div>
      <select onChange={onChangePokeName}>{listaPokemons}</select>
      {pokeName && <PokeCard pokemon={pokeName}/>}
    </div>
  );
};

export default App;
