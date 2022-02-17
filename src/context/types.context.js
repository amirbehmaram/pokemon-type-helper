import { createContext } from 'react';

/**
 * Tbh, I am just now reading about the Context API because I haven't yet gotten to
 * it in my React course, but from what I'm reading in the docs it sounds like the
 * perfect answer to what I need to achieve. We have our two type that are being set
 * waaaaaaaaay down in the dropdown component within PokemonTypes but we need those
 * values to correctly render out our WeaknessResults. But, I don't truly know
 * what I'm doing so this could all be wrong for all I know.
 */
 const TypeContext = createContext({
  types: { primary: '', secondary: '' },
  updateTypes: () => {
    
  }
});

export default TypeContext;
