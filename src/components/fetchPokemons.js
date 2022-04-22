import { api } from "../api";

const TOTAL_POKEMONS = 1126;

export const fetchPokemons = () => {
  return api.get(`/pokemon/?offset=0&limit=20`)
  .then((pokemonsObj) => {
    const pokemonsList = pokemonsObj.data.results
    return pokemonsList.map((pokemonData) => {
      const pokemonId = pokemonData.url.split('/')[6]
      return api.get(`/pokemon/${pokemonId}`)
      .then((pokemon) => pokemon.data)
    })
  }).then((pokemons) => Promise.all(pokemons))
}
