import GlobalStyle from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Heading } from './components';
import theme from '../src/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Heading variant='h3' align='center'>Pokedex</Heading>
    </ThemeProvider>
  );
}

export default App;
