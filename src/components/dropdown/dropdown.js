import { useState } from 'react';
// Styles
import "./dropdown.scss";

// Data
import Types from "../../data/types";
import TypeIcons from "../../data/icons";

function Dropdown(props) {
  // Used to follow which currently selected dropdown is picked so we can update the icon to
  // show next to it.
  const [selectedIcon, setSelectedIcons] = useState('');

  // When the dropdown is updated lets update the type icon to show next to it!
  const dropdownChange = (event) => {
    let showSecondaryDropdown = false;

    setSelectedIcons(event.target.value);

    // This is only set on the primary right now so we need to check
    // if it exists first
    if (props.onDropdownUpdate) {
      if (event.target.value !== '') {
        showSecondaryDropdown = true
      } else {
        showSecondaryDropdown = false
      }
  
      props.onDropdownUpdate(showSecondaryDropdown);
    }
  }

  if (!props.isShowing) {
    return null;
  }

  return (
    <div className="dropdown">
      <div className="dropdown__icon">{ TypeIcons[selectedIcon] ? TypeIcons[selectedIcon] : ''}</div>
      <div className="dropdown__select-container">
        <label className="dropdown__label" htmlFor={ props.id }>{ props.label }</label>
        <select 
          id={ props.id } 
          className="dropdown__options"
          onChange={ dropdownChange }
        >
          <option value={''}>{ props.label }</option>
          {
            Types.map( (type, index) => {
              return <option key={ index } value={ type.toLowerCase() }>{ type }</option>
            })
          }
        </select>
      </div>
    </div>
  )
}

export default Dropdown;
