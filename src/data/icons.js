// Just a static object where each key consists of a pokemon type and its
// value is an SVG for the icon.
// To be used for like outputting the info or anything like that.

// How to import the SVGs as ReactComponents
import { ReactComponent as Bug } from '../icons/bug.svg';
import { ReactComponent as Dark } from '../icons/dark.svg';
import { ReactComponent as Dragon } from '../icons/dragon.svg';
import { ReactComponent as Electric } from '../icons/electric.svg';
import { ReactComponent as Fairy } from '../icons/fairy.svg';
import { ReactComponent as Fight } from '../icons/fighting.svg';
import { ReactComponent as Fire } from '../icons/fire.svg';
import { ReactComponent as Flying } from '../icons/flying.svg';
import { ReactComponent as Ghost } from '../icons/ghost.svg';
import { ReactComponent as Grass } from '../icons/grass.svg';
import { ReactComponent as Ground } from '../icons/ground.svg';
import { ReactComponent as Ice } from '../icons/ice.svg';
import { ReactComponent as Normal } from '../icons/normal.svg';
import { ReactComponent as Poison } from '../icons/poison.svg';
import { ReactComponent as Psychic } from '../icons/psychic.svg';
import { ReactComponent as Rock } from '../icons/rock.svg';
import { ReactComponent as Steel } from '../icons/steel.svg';
import { ReactComponent as Water } from '../icons/water.svg';

const TypeIcons = {
  'bug': <Bug />,
  'dark': <Dark />,
  'dragon': <Dragon />,
  'electric': <Electric />,
  'fairy': <Fairy />,
  'fighting': <Fight />,
  'fire': <Fire />,
  'flying': <Flying />,
  'ghost': <Ghost />,
  'grass': <Grass />,
  'ground': <Ground />,
  'ice': <Ice />,
  'normal': <Normal />,
  'poison': <Poison />,
  'psychic': <Psychic />,
  'rock': <Rock />,
  'steel': <Steel />,
  'water': <Water />
}

export default TypeIcons;
