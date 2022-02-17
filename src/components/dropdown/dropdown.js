// React Imports
import { useState, useContext } from 'react';

// Style Imports
import "./dropdown.scss";

// Component Imports

// Context Imports
import TypeContext from '../../context/types.context';

// Data Imports
import Types from "../../data/types";
import TypeIcons from "../../data/icons";

function Dropdown(props) {
  // Used to follow which currently selected dropdown is picked so we can update the icon to
  // show next to it.
  const [selectedIcon, setSelectedIcons] = useState('');

  const {getTypes, updateTypes} = useContext(TypeContext);

  // When the dropdown is updated lets update the type icon to show next to it!
  const dropdownChange = (event) => {
    let selectedType = event.target.value;

    setSelectedIcons(selectedType);

    // Push our selected type up to our context
    updateTypes(props.dropdownType, selectedType);
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
              return (
                <option 
                  key={ index } 
                  value={ type.toLowerCase() } 
                  disabled={type.toLocaleLowerCase() === props.disabledType ? true : false}
                >
                  { type }
                </option>
              )
            })
          }
        </select>
      </div>
    </div>
  )
}

export default Dropdown;
