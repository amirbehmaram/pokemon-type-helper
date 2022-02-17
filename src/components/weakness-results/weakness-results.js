// React Imports
import { useState, useContext } from 'react';

// Style Imports
import './weakness-results.scss';

// Component Imports

// Context Imports
import TypeContext from '../../context/types.context';

// Data Imports
import Defence from '../../data/defence';

function WeaknessResults(props) {

  const {getTypes, updateTypes} = useContext(TypeContext);

  console.log(Defence.fire);

  return (
    <div>{ getTypes.primary + getTypes.secondary }</div>
  )
} 

export default WeaknessResults;
