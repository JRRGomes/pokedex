import GlobalStyle from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Heading } from './components';
import theme from '../src/theme';
import { useEffect, useState } from 'react';
import { fetchPokemons } from './services/pokemon';

function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetchPokemons()
    .then((pokemonsObj) => setPokemons(pokemonsObj))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Heading variant='h3' align='center'>Pokedex</Heading>
      {pokemons.map((pokemon) => (
        <Heading key={pokemon.name} variant='h4' align='center'>{pokemon.name}</Heading>
      ))}
    </ThemeProvider>
  );
}

export default App;
