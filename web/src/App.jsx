import { useEffect, useState } from 'react';
import './App.css'
import { getPokemon2 } from './service/api';
import Storage from './service/storage';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPokemon2()
      .then((response) => setTimeout(() => setPokemon(response), 1000))
      .catch((error) => { setTimeout(() => setError(error), 1000) })
  }, []);

  console.log(Storage.getPokemon());

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <img src={pokemon.sprites.front_default} alt={pokemon?.name} />
      <h1>{pokemon.name}</h1>
    </>
  )
}

export default App
