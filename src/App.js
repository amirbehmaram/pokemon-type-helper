// React Imports
import { useState } from 'react';

// Style Imports
import './App.scss';

// Component Imports
import PokemonTypes from './components/pokemon-types/pokemon-types';
import WeaknessResults from './components/weakness-results/weakness-results';
import Footer from "./components/footer/footer";

// Context Imports
import TypeContext from './context/types.context';

function App() {
  const [getTypes, setTypes] = useState({ primary: '', secondary: '' });

  const updateTypes = (dropdownName, type) => {
    setTypes({ ...getTypes, [dropdownName]: type});
  }

  return (
    <div className="site">
      <div className="site__content">
        <h1 className="title">Pokemon Type Helper</h1>
        <p className="content">
          This is still a work in progress, but the general idea behind it is to have a simple app to check for the
          various weaknesses/resistance that any given pokemon may have. I can never keep all that info in my head
          and it's easier to just use something like this to figure it out on the fly.
        </p>
        <TypeContext.Provider 
          value={{
            getTypes, 
            updateTypes
          }}
        >
          <PokemonTypes />
          <WeaknessResults />
        </TypeContext.Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
