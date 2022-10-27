import GlobalStyle from './styles/GlobalStyle';
import { Reset } from 'styled-reset';
import Router from './router/Router';

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
