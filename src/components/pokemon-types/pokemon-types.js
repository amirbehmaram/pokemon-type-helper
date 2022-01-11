// Core imports
import { useState } from "react";

// Style imports
import "./pokemon-types.scss";

// Custom Component imports
import Dropdown from "../dropdown/dropdown";

function PokemonTypes() {
  // To keep track of the secondary dropdown
  const [showSecondary, setShowSecondary] = useState(false);

  // showSecondaryDropdown will either be true or false
  // is set in dropdown.js dropdownChange event
  const primaryDropdownUpdate = (showSecondaryDropdown) => {
    setShowSecondary(showSecondaryDropdown);
  }

  return (
    <div className="pokemon-types">
      <Dropdown 
        label="Primary Type" 
        id="primary-type" 
        isShowing={ true } 
        onDropdownUpdate={ primaryDropdownUpdate } 
      />
      <Dropdown 
        label="Secondary Type" 
        id="secondary-type" 
        isShowing={ showSecondary } 
      />
    </div>
  );
}

export default PokemonTypes;
