import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState({});
  

  useEffect(() => {
      pegaPokemon(props.pokemon)
  }, [props.pokemon]);

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        console.log(response.data)
        setPokemon(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} kg </p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        )}
        
    </div>
  )
 ;
};
export default PokeCard;
