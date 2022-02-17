// React Imports
import { useState, useContext } from "react";

// Style Imports
import "./pokemon-types.scss";

// Component Imports
import Dropdown from "../dropdown/dropdown";

// Context Imports
import TypeContext from '../../context/types.context';

function PokemonTypes() {
  // Grab our sweet sweet context to handle some of the inner workings of the dropdowns.
  const {getTypes, updateTypes} = useContext(TypeContext);

  return (
    <div className="pokemon-types">
      <Dropdown 
        label="Primary Type" 
        id="primary-type" 
        isShowing={ true } 
        dropdownType={'primary'}
        disabledType={getTypes.secondary}
      />
      <Dropdown 
        label="Secondary Type" 
        id="secondary-type" 
        isShowing={ getTypes.primary !== '' ? true : false }
        dropdownType={'secondary'}
        disabledType={getTypes.primary}
      />
    </div>
  );
}

export default PokemonTypes;
