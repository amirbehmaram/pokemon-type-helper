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

  // console.log(primaryWeaknesses);
  // console.log(secondaryWeaknesses);

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
   * 
   * So we want to take these two:

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
  const setupWeaknesses = () => {
    // If we don't have a primary then just bail dood
    if (!primaryWeaknesses) {
      return;
    }

    let tempDoubleDamage = [],
        tempNormalDamage = [],
        tempHalfDamage = [],
        tempNoDamage = [];

    let finalQuadDamage = [],
        finalDoubleDamage = [],
        finalNormalDamage = [],
        finalHalfDamage = [],
        finalNoDamage = [];

    tempNoDamage = primaryWeaknesses.noDamage;
    tempHalfDamage = primaryWeaknesses.halfDamage;
    tempNormalDamage = primaryWeaknesses.normalDamage;
    tempDoubleDamage = primaryWeaknesses.doubleDamage;

    // If we have our secondary, we need to do our weakness "multiplications" to get the
    // actually correct values
    if (secondaryWeaknesses) {

      tempNoDamage = tempNoDamage.concat(secondaryWeaknesses.noDamage);
      tempHalfDamage = tempHalfDamage.concat(secondaryWeaknesses.halfDamage);
      tempNormalDamage = tempNormalDamage.concat(secondaryWeaknesses.normalDamage);
      tempDoubleDamage = tempDoubleDamage.concat(secondaryWeaknesses.doubleDamage);

      // setup quad damage - just take any dups from double and move them into quad
      tempDoubleDamage.forEach( (weakness) => {
        let quadValues = [];

        tempDoubleDamage.filter( (val, index) => {
          if (val === weakness) {
            quadValues.push(index);
          }
        });

        /**
         * This is stupid looking but let me explain.
         * 
         * So if we have multiple values in quad values that means we have some dups that
         * need to be elevated to quad damage. Since they are they same string I'm just grabbing the first one
         * from tempDoubleDamage and pushing that string into tempQuad Damage and then I'm going through and 
         * splicing out both values from tempDoubleDamage using the value to find the index since we are splicing
         * values out in place.
         */
        if (quadValues.length > 1) {
          
          let quadDamageName = tempDoubleDamage[quadValues[0]];
          finalQuadDamage.push(quadDamageName);
          
          for(let index = 0; index < quadValues.length; index++) {
            let spliceIndex = tempDoubleDamage.indexOf(quadDamageName);
            tempDoubleDamage.splice(spliceIndex, 1);
          }
        }
      });

      // Check Double vs normal
      sortWeaknesses(tempDoubleDamage, tempNormalDamage, finalDoubleDamage);

      // Check Double vs 1/2
      sortWeaknesses(tempDoubleDamage, tempHalfDamage, finalNormalDamage);

      // Check Double vs no
      sortWeaknesses(tempDoubleDamage, tempNoDamage, finalNoDamage);

      // Check Normal vs 1/2
      sortWeaknesses(tempNormalDamage, tempHalfDamage, finalHalfDamage);

      // Check Normal vs no
      sortWeaknesses(tempNoDamage, tempNoDamage, finalNoDamage);

      // Check 1/2 vs no
      sortWeaknesses(tempHalfDamage, tempNoDamage, finalNoDamage);
    }
    
    console.log(finalNoDamage);
    console.log(finalHalfDamage);
    console.log(finalNormalDamage);
    console.log(finalDoubleDamage);
    console.log(finalQuadDamage);
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

function sortWeaknesses(weaknessArrOne, weaknessArrTwo, finalDestination) {

  let weaknessTwoCopy = weaknessArrTwo;

  for(let indexOne = 0; indexOne < weaknessArrOne.length; indexOne++) {

    for(let indexTwo = 0; indexTwo < weaknessTwoCopy.length; indexTwo++) {
      
      if (weaknessTwoCopy[indexTwo] === weaknessArrOne[indexOne]) {
        pushValueIntoUniqueArray(weaknessTwoCopy[indexTwo], finalDestination);
        weaknessTwoCopy.splice(indexTwo, 1);
      }
    }
  }
}
