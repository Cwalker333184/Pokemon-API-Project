// Only use this import once
import fetch from 'node-fetch';

// Group 1: Pokémon Data Fetching

// Fetch Squirtle data
const urlSquirtle = 'https://pokeapi.co/api/v2/pokemon/squirtle';

async function getSquirtleData() {
  try {
    const response = await fetch(urlSquirtle);
    const data = await response.json();
    
    console.log('--- Squirtle Data ---');
    console.log('Name:', data.name);
    console.log('Base Experience:', data.base_experience);
  } catch (error) {
    console.error('Error fetching Squirtle data:', error);
  }
}

// Fetch Pikachu data
const fetchPikachuData = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    const data = await response.json();
    console.log('--- Pikachu Data ---');
    console.log(`Name: ${data.name}`);
    console.log(`Types: ${data.types.map(type => type.type.name).join(', ')}`);
  } catch (error) {
    console.error('Error fetching Pikachu data:', error);
  }
};


// Fetch Jigglypuff data
const urlJigglypuff = 'https://pokeapi.co/api/v2/pokemon/jigglypuff';

async function getJigglypuffData() {
  try {
    const response = await fetch(urlJigglypuff);
    const data = await response.json();
    
    console.log('--- Jigglypuff Data ---');
    console.log('Name:', data.name);
    console.log('Weight:', data.weight);
  } catch (error) {
    console.error('Error fetching Jigglypuff data:', error);
  }
}



// Call functions
getSquirtleData();
fetchPikachuData();
getJigglypuffData();


// Group 2: Miscellaneous API Calls

// Fetch the second Pokémon in the list
const urlSecondPokemon = 'https://pokeapi.co/api/v2/pokemon/2';
async function getSecondPokemonData() {
  try {
    const response = await fetch(urlSecondPokemon);
    const data = await response.json();
    console.log('--- Second Pokémon Data ---');
    console.log('Name:', data.name);
  } catch (error) {
    console.error('Error fetching second Pokémon data:', error);
  }
}
getSecondPokemonData();

// Fetch first Berry flavor
const urlFirstBerry = 'https://pokeapi.co/api/v2/berry/1';
async function getFirstBerryData() {
  try {
    const response = await fetch(urlFirstBerry);
    const data = await response.json();
    console.log('--- First Berry Flavor ---');
    console.log('Flavor:', data.flavor.name);
  } catch (error) {
    console.error('Error fetching first berry data:', error);
  }
}
getFirstBerryData();

// Fetch first Ability
const urlFirstAbility = 'https://pokeapi.co/api/v2/ability/1';
async function getFirstAbilityData() {
  try {
    const response = await fetch(urlFirstAbility);
    const data = await response.json();
    console.log('--- First Ability ---');
    console.log('Name:', data.name);
    console.log('Effect:', data.effect_entries[0].effect);
  } catch (error) {
    console.error('Error fetching first ability data:', error);
  }
}
getFirstAbilityData();