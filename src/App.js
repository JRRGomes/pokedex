import GlobalStyle from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Card, CardsContainer, Heading, Loading } from './components';
import theme from '../src/theme';
import { useEffect, useState } from 'react';
import { fetchPokemons } from './services/pokemon';
import pokebol from './img/pokebol.png'

function App() {

  const [pokemons, setPokemons] = useState([])
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const getPokemon = async () => {
    setIsLoading(true)

    try {
      const pokemonsObj = await fetchPokemons()
      setPokemons(pokemonsObj)
    } catch (error) {
      console.error(error)
      setHasError(true)
    }
    
    setIsLoading(false)
  }

  useEffect( () => {
    getPokemon()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {!hasError && !isLoading &&
        <>
          <Heading variant='h3' align='center'>Pokedex</Heading>
          <CardsContainer>
            {pokemons.map((pokemon) => (
              <Card key={pokemon.name} pokemon={pokemon} />
              ))}
          </CardsContainer>
        </>
      }
      {hasError && <Heading variant='h4'>Could not load posts</Heading>}
      {isLoading && <Loading src={pokebol} />}
    </ThemeProvider>
  );
}

export default App;
