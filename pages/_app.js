import '../styles/globals.css';

import CharacterContext from '../context/CharacterContext';

function MyApp({ Component, pageProps }) {
  return <CharacterContext> <Component {...pageProps} /> </CharacterContext> 
}

export default MyApp
