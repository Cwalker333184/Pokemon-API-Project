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


