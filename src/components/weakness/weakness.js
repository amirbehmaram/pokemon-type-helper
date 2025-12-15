// React Imports
import { useState, useContext } from 'react';

// Context Imports
import TypeContext from '../../context/types.context';

// Data Imports
import Defence from '../../data/defence';

/**
 * Some context because who knows when I'll come back to this. 
 * 
 * Originally when I created this I had all my logic for determining weakness results in
 * weakness-results.js. You can go look in there and see that it's a little over engineered/confusing
 * to follow.
 * 
 * So I just moved over to this for now to start fresh. The idea shouldn't really be that complex.
 *   - Take our two selected type array and mash them into one mega array
 *   - We may have duplicate results, that helps us actually because we can use that to enforce the various weakness rules.
 *     - Ex: Dragon and Ground are both 2x weak to Ice, if you select those there will be two ice within rawDoubleDamage.
 *       So when we go to finalize quadDamage we would check rawDoubleDamage for duplicate, and if so move that type into quad.
 *     - Another Ex: If a type doesn't take damage from a certain type (Normal is unaffected by Ghost), that type doesn't take damage
 *       from that type no matter their secondary type (Normal & Fire takes 0 from Ghost still). So if we have any values in rawNoDamage
 *       those types shouldn't be present in any other damage array.
 * 
 * 
 * I think the main problem to solve is the proper order of operations for all of this. Which array should we construct first?
 * I am thinking probably noDamage because it is an absolute rule and then we work up from there. The main thing we shouldn't be doing I think
 * is actually mutating the rawDamage arrays. I think we just need helper functions that take all the rawDamage arrays to read, perform their various
 * rules on, and return a fresh non-duplicate containing array.
 * 
 */
export const Weakness = () => {
    // Contexts
    const {getTypes, updateTypes} = useContext(TypeContext);

    // The currently selected primary type and the possible selected secondary type
    const primaryType = getTypes.primary;
    const secondaryType = getTypes.secondary;

    // Raw damage arrays are just the mashup of both types defence arrays.
    // We are going to use these to construct the final weakness results.
    const rawNoDamage = [];
    const rawHalfDamage = [];
    const rawNormalDamage = [];
    const rawDoubleDamage = [];

    console.log("!! Chosen Types: ", primaryType, secondaryType);

    rawNoDamage.push(...Defence[primaryType].noDamage);
    rawHalfDamage.push(...Defence[primaryType].halfDamage);
    rawNormalDamage.push(...Defence[primaryType].normalDamage);
    rawDoubleDamage.push(...Defence[primaryType].doubleDamage);

    if (secondaryType) {
        rawNoDamage.push(...Defence[secondaryType].noDamage);
        rawHalfDamage.push(...Defence[secondaryType].halfDamage);
        rawNormalDamage.push(...Defence[secondaryType].normalDamage);
        rawDoubleDamage.push(...Defence[secondaryType].doubleDamage);
    }

    console.log("!! NO DAMAGE: ", rawNoDamage);
    console.log("!! HALF DAMAGE: ", rawHalfDamage);
    console.log("!! NORMAL DAMAGE: ", rawNormalDamage);
    console.log("!! DOUBLE DAMAGE: ", rawDoubleDamage);

    // I am imagining this is just going to be a table where we can insert the icon tags into each row.
    // |---------------------------------|
    // | No Damage   |                   |
    // |---------------------------------|
    // | Half Damage | Fire, Water       |
    // |---------------------------------|

    return (<div>Hello</div>);
}

/**************************************************************/
/*                     Helper functions                       */
/**************************************************************/

// If a type doesn't take damage from another, that rule applies no matter what.
// So if we have a type in the raw no damage array we need to check all others for that type and remove it.
const finalizeNoDamageResult = () => {

}





// Just a simple way to push a value into an array only if it's not already present
function pushValueIntoUniqueArray(value, arr) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}