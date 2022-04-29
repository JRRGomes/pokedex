import GlobalStyle from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Card, Container, Heading } from './components';
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
      {!hasError && !isLoading && <Container>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </Container>}
      {hasError && <Heading variant='h4'>Could not load posts</Heading>}
      {isLoading && <Heading variant='h4'>Loading pokemons...</Heading>}
    </ThemeProvider>
  );
}

export default App;
