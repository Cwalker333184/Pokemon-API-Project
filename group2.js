// Group 2: Miscellaneous API Calls

// Fetch the second Pokémon in the list
async function getSecondPokemonData() {
  console.log('Fetching second Pokémon...');
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/2');
    const data = await response.json();
    console.log('--- Second Pokémon Data ---');
    console.log('Name:', data.name);
  } catch (error) {
    console.error('Error fetching second Pokémon data:', error);
  }
}
getSecondPokemonData();

// Fetch first Berry flavor
async function getFirstBerryData() {
  console.log('Fetching first Berry...');
  try {
    const response = await fetch('https://pokeapi.co/api/v2/berry/1');
    const data = await response.json();
    console.log('--- First Berry Flavor ---');
    console.log('Flavor:', data.flavors[0].flavor.name); // fixed path!
  } catch (error) {
    console.error('Error fetching first berry data:', error);
  }
}
getFirstBerryData();

// Fetch first Ability
async function getFirstAbilityData() {
  console.log('Fetching first Ability...');
  try {
    const response = await fetch('https://pokeapi.co/api/v2/ability/1');
    const data = await response.json();
    console.log('--- First Ability ---');
    console.log('Name:', data.name);
    console.log('Effect:', data.effect_entries[0].effect);
  } catch (error) {
    console.error('Error fetching first ability data:', error);
  }
}
getFirstAbilityData();

