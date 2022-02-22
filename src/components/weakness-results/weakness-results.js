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

  // Contexts
  const {getTypes, updateTypes} = useContext(TypeContext);

  // States
  const [getQuadDamage, setQuadDamage] = useState([]);
  const [getDoubleDamage, setDoubleDamage] = useState([]);
  const [getNormalDamage, setNormalDamage] = useState([]);
  const [getHalfDamage, setHalfDamage] = useState([]);
  const [getNoDamage, setNoDamage] = useState([]);

  let defenceKeys = Object.keys(Defence);
  let primaryWeaknesses, secondaryWeaknesses;

  defenceKeys.forEach( (key) => {
    if (key === getTypes.primary) {
      primaryWeaknesses =  Defence[key];
    } else if (key === getTypes.secondary) {
      secondaryWeaknesses =  Defence[key];
    }
  });

  console.log(primaryWeaknesses);
  console.log(secondaryWeaknesses);

  /**
   * Okay so I think I have the rules for these types pretty clear in my head. I'll try to document it here for future me's sake.
   * 
   * 1) To start off simple, if one type has another that doesn't affect it, that applies to any dual typing with that type.
   *    example: Normal isn't affected by ghost, so any dual types with normal are immune to ghost
   * 
   * 2) Types are multiplied together when calculating weaknesses.
   *    example: If a pokemon is dual typed Dragon & Ground it will be 4x weak to Ice since each of those are Double Damaged by Ice.
   *             Another example of this, using that same typing is Grass. A Dual Typed Dragon & Ground pokemon will take normal damage from
   *             a Grass move since Dragon takes 1/2 damage from Grass and Ground takes 2x damage from it.
   */
  const setupWeaknesses = () => {
    // If we don't have a primary then just bail dood
    if (!primaryWeaknesses) {
      return;
    }

    let tempQuadDamage = [],
        tempDoubleDamage = [],
        tempNormalDamage = [],
        tempHalfDamage = [],
        tempNoDamage = [];

    // To start of easy, setup our no damage values.
    if (primaryWeaknesses.noDamage.length > 0) {
      primaryWeaknesses.noDamage.forEach( (weakness) => {
        pushValueIntoUniqueArray(weakness, tempNoDamage);
      });
    }

    if (primaryWeaknesses.halfDamage.length > 0) {
      primaryWeaknesses.halfDamage.forEach( (weakness) => {
        pushValueIntoUniqueArray(weakness, tempHalfDamage);
      });
    }

    if (primaryWeaknesses.normalDamage.length > 0) {
      primaryWeaknesses.normalDamage.forEach( (weakness) => {
        pushValueIntoUniqueArray(weakness, tempNormalDamage);
      });
    }

    if (primaryWeaknesses.doubleDamage.length > 0) {
      primaryWeaknesses.doubleDamage.forEach( (weakness) => {
        pushValueIntoUniqueArray(weakness, tempDoubleDamage);
      });
    }

    // If we have our secondary, we need to do our weakness "multiplications" to get the
    // actually correct values
    if (secondaryWeaknesses) {

      // Setup the no damage first since that's the easy one
      if (secondaryWeaknesses.noDamage.length > 0) {
        secondaryWeaknesses.noDamage.forEach( (weakness) => {
          pushValueIntoUniqueArray(weakness, tempNoDamage);
        });
      }

      // Check for any quad damages
      if (secondaryWeaknesses.doubleDamage.length > 0) {

        // Go through our secondary weakness's double damages and see
        // if it exists in our temp double damage, if it does splice that value
        // from the temp array, and push it into our quad
        secondaryWeaknesses.doubleDamage.forEach( (weakness) => {
          let index = tempDoubleDamage.indexOf(weakness);

          if (index !== -1) {
            tempDoubleDamage.splice(index, 1);
            pushValueIntoUniqueArray(weakness, tempQuadDamage);
          }
        });
      }

      // Check for normal x double damage combos

      /****************/
      /*
        Left off here - trying to find a smarter/less brute force way to figure out all these type multiplications
        without makig things so messy. Chart below for an example.

        So we want to take these two:

        Primary    |  Secondary
        -----------------------
        1/2  1  2  |  1/2  1  2
         a   d  e  |          a
         b         |          b
         c         |          d
                   |          e

        And turn it into a single set:

        Weaknesses   
        ------------
        1/2  1  2  4
         c   a  d  e
             b     
      */
    }
    
    console.log(tempNoDamage);
    console.log(tempHalfDamage);
    console.log(tempNormalDamage);
    console.log(tempDoubleDamage);
    console.log(tempQuadDamage);
  };

  

  setupWeaknesses();

  return (
    <div className='weakness-results'>
      
      <div className='weakness --4x'>

      </div>

      <div className='weakness --2x'>

      </div>

      <div className='weakness'>

      </div>

      <div className='weakness --0.5x'>

      </div>

      <div className='weakness --0x'>

      </div>


    </div>
  )
} 

export default WeaknessResults;

/**************************************************************/
/*                     Helper functions                       */
/**************************************************************/

// Just a simple way to push a value into an array only if it's not already present
function pushValueIntoUniqueArray(value, arr) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
