import { api } from "../api";

const TOTAL_POKEMONS = 1126;

export const fetchPokemons = () => {
  return api.get(`/pokemon/?offset=0&limit=${TOTAL_POKEMONS}`)
  .then((pokemonsObj) => {
    const pokemonsList = pokemonsObj.data.results
    return pokemonsList.map((pokemonData) => 
       api.get(`/pokemon/${pokemonData.name}`)
      .then((pokemon) => pokemon.data)
    )
  }).then((pokemons) => Promise.all(pokemons))
}
