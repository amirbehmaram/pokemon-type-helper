/**
 * For the sake of learning, I might eventually replace this with some kind of API call.
 * I haven't really found a nicely structure source of info like this so idk if that would
 * even make sense tbh.
 */
const Defence = {
  bug: {
    'noDamage': [],
    'halfDamage': ['fighting', 'grass', 'ground'],
    'normalDamage': ['bug', 'dark', 'dragon', 'electric', 'fairy', 'ghost', 'ground', 'ice', 'normal', 'poison', 'psychic', 'steel', 'water'],
    'doubleDamage': ['fire', 'flying', 'rock']
  },
  dark: {
    'noDamage': ['psychic'],
    'halfDamage': ['dark', 'ghost'],
    'normalDamage': ['dragon', 'electric', 'fire', 'flying', 'grass', 'ground', 'ice', 'normal', 'poison', 'steel', 'water'],
    'doubleDamage': ['bug', 'fairy', 'fighting']
  },
  dragon: {
    'noDamage': [],
    'halfDamage': ['electric', 'fire', 'grass', 'water'],
    'normalDamage': ['bug', 'dark', 'fighting', 'flying', 'ghost', 'ground', 'normal', 'poison', 'psychic', 'rock', 'steel'],
    'doubleDamage': ['dragon', 'fairy', 'ice']
  },
  electric: {
    'noDamage': [],
    'halfDamage': ['electric', 'flying', 'steel'],
    'normalDamage': ['bug', 'dark', 'dragon', 'fairy', 'fighting', 'fire', 'ghost', 'grass', 'ice', 'normal', 'poison', 'psychic', 'rock', 'water'],
    'doubleDamage': ['ground']
  },
  fairy: {
    'noDamage': ['dragon'],
    'halfDamage': ['bug', 'dark', 'fighting'],
    'normalDamage': ['electric', 'fairy', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'psychic', 'rock', 'water'],
    'doubleDamage': ['poison', 'steel']
  },
  fighting: {
    'noDamage': [],
    'halfDamage': ['bug', 'dark', 'rock'],
    'normalDamage': ['dragon', 'electric', 'fighting', 'fire', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'steel', 'water'],
    'doubleDamage': ['fairy', 'flying', 'psychic']
  },
  fire: {
    'noDamage': [],
    'halfDamage': ['bug', 'fairy', 'fire', 'grass', 'ice', 'steel'],
    'normalDamage': ['dark', 'dragon', 'electric', 'fighting', 'flying', 'ghost', 'normal', 'poison', 'psychic'],
    'doubleDamage': ['ground', 'rock', 'water']
  },
  flying: {
    'noDamage': ['ground'],
    'halfDamage': ['bug', 'fighting', 'grass'],
    'normalDamage': ['dark', 'dragon', 'fairy', 'fire', 'flying', 'ghost', 'normal', 'poison', 'psychic', 'steel', 'water'],
    'doubleDamage': ['electric', 'ice', 'rock']
  },
  ghost: {
    'noDamage': ['fighting', 'normal'],
    'halfDamage': ['bug', 'poison'],
    'normalDamage': ['dragon', 'electric', 'fairy', 'fire', 'flying', 'grass', 'ground', 'ice', 'psychic', 'rock', 'steel', 'water'],
    'doubleDamage': ['dark', 'ghost']
  },
  grass: {
    'noDamage': [],
    'halfDamage': ['electric', 'grass', 'ground', 'water'],
    'normalDamage': ['dark', 'dragon', 'fairy', 'fighting', 'ghost', 'normal', 'psychic', 'rock', 'steel'],
    'doubleDamage': ['bug', 'fire', 'flying', 'ice', 'poison']
  },
  ground: {
    'noDamage': ['electric'],
    'halfDamage': ['poison', 'rock'],
    'normalDamage': ['bug', 'dark', 'dragon', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'ground', 'normal', 'psychic', 'steel'],
    'doubleDamage': ['grass', 'ice', 'water']
  },
  ice: {
    'noDamage': [],
    'halfDamage': ['ice'],
    'normalDamage': ['bug', 'dark', 'dragon', 'electric', 'fairy', 'flying', 'ghost', 'grass', 'ground', 'normal', 'poison', 'psychic', 'water'],
    'doubleDamage': ['fighting', 'fire', 'rock', 'steel']
  },
  normal: {
    'noDamage': ['ghost'],
    'halfDamage': [],
    'normalDamage': ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fire', 'flying', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'],
    'doubleDamage': ['fighting']
  },
  poison: {
    'noDamage': [],
    'halfDamage': ['bug', 'fairy', 'fighting', 'grass', 'poison'],
    'normalDamage': ['dark', 'dragon', 'electric', 'fire', 'flying', 'ghost', 'ice', 'normal', 'rock', 'steel', 'water'],
    'doubleDamage': ['ground', 'psychic']
  },
  psychic: {
    'noDamage': [],
    'halfDamage': ['fighting', 'psychic'],
    'normalDamage': ['dragon', 'electric', 'fairy', 'fire', 'flying', 'grass', 'ground', 'ice', 'normal', 'poison', 'rock', 'steel', 'water'],
    'doubleDamage': ['bug', 'dark', 'ghost']
  },
  rock: {
    'noDamage': [],
    'halfDamage': ['fire', 'flying', 'normal', 'poison'],
    'normalDamage': ['bug', 'dark', 'dragon', 'electric', 'fairy', 'ghost', 'ice', 'psychic', 'rock'],
    'doubleDamage': ['fighting', 'grass', 'ground', 'steel', 'water']
  },
  steel: {
    'noDamage': ['poison'],
    'halfDamage': ['bug', 'dragon', 'fairy', 'flying', 'grass', 'ice', 'normal', 'psychic', 'rock', 'steel'],
    'normalDamage': ['dark', 'electric', 'ghost', 'water'],
    'doubleDamage': ['fighting', 'fire', 'ground']
  },
  water: {
    'noDamage': [],
    'halfDamage': ['fire', 'ice', 'steel', 'water'],
    'normalDamage': ['bug', 'dark', 'dragon', 'fairy', 'fighting', 'flying', 'ghost', 'ground', 'normal', 'poison', 'psychic', 'rock'],
    'doubleDamage': ['electric', 'grass']
  },
}

export default Defence;
