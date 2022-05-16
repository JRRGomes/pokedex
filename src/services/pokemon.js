import axios from 'axios';

const TOTAL_POKEMONS = 1126;

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})

const getPokemon = ( pokemonsObj ) => {
  const pokemonsList = pokemonsObj.data.results
  const pokemonsPromises = pokemonsList.map( async (pokemonData) => {
    const pokemon = await api.get(`/pokemon/${pokemonData.name}`)
    return pokemon.data
  })
  return Promise.all(pokemonsPromises)
}

export const fetchPokemons = async () => {
  try {
    const pokemonsObj = await api.get(`/pokemon/?offset=0&limit=${TOTAL_POKEMONS}`)
    return await getPokemon(pokemonsObj)
  } catch (error) {
      throw new Error(`Could not load pokemon data: ${error}`)
  }
}
