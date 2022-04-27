import GlobalStyle from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Heading } from './components';
import theme from '../src/theme';
import { useEffect, useState } from 'react';
import { fetchPokemons } from './services/pokemon';

function App() {

  const [pokemons, setPokemons] = useState([])
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const getPokemon = async () => {
    try {
      setIsLoading(true)
      const pokemonsObj = await fetchPokemons()
      setIsLoading(false)
      setPokemons(pokemonsObj)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
      setHasError(true)
    }
  }

  useEffect( () => {
    getPokemon()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Heading variant='h3' align='center'>Pokedex</Heading>
      {!hasError && !isLoading && <div>
        {pokemons.map((pokemon) => (
          <Heading key={pokemon.name} variant='h4' align='center'>{pokemon.name}</Heading>
        ))}
      </div>}
      {hasError && <div>Could not load posts</div>}
      {isLoading && <div>Loading pokemons...</div>}
    </ThemeProvider>
  );
}

export default App;
