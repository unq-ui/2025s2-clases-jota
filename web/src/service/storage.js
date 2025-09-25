const setPokemon = (pokemonName) => { localStorage.setItem('pokemon', pokemonName); };
const getPokemon = () => localStorage.getItem('pokemon');

const Storage = { setPokemon, getPokemon };

export default Storage;