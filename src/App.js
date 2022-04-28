import GlobalStyle from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Container, Heading } from './components';
import { Card, CardImage } from './components/card/'
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
          <Card key={pokemon.name}>
            <CardImage src={pokemon.sprites.other.dream_world.front_default} />
              {pokemon.types.map((typeObj) => (
                <p>{typeObj.type.name}</p>
              ))}
          </Card>
        ))}
      </Container>}
      {hasError && <Card>Could not load posts</Card>}
      {isLoading && <Card>Loading pokemons...</Card>}
    </ThemeProvider>
  );
}

export default App;
