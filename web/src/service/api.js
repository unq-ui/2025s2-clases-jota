import axios from "axios";
import Storage from "./storage";

const API = 'https://pokeapi.co/api/v2';

const getPokemon = (pokemonName) => axios.get(`${API}/pokemon/${pokemonName}`)
  .then(response => response.data)
  .catch(error => Promise.reject({ message: error.response.data, status: error.response.status }));

const getPokemon1 = () => fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.ok ? response.json() : Promise.reject({ message: response.statusText, status: response.status }));


const getPokemon2 = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    Storage.setPokemon(response.data.name);
    return response.data;

  } catch (error) {
    return Promise.reject({ message: error.response.data, status: error.response.status });
  }
};



export { getPokemon, getPokemon1, getPokemon2 };