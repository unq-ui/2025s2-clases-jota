import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPokemon } from "./service/api";

const Pokemon = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getPokemon(pokemonName).then((data) => setPokemon(data));
  }, [])

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return <div>Pokemon: {pokemon.name} </div>;
}

export default Pokemon