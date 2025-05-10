
// Fetch ability data by ID (Ability ID: 1)
async function getAbilityData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/ability/1');
    const data = await response.json();
    console.log('--- Ability Data ---');
    console.log('Ability Name:', data.name);
    console.log('Effect:', data.effect_entries[0].effect); // Adjust path if needed
  } catch (error) {
    console.error('Error fetching ability data:', error);
  }
}
getAbilityData();

// Fetch item data by ID (Item ID: 1)
async function getItemData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/item/1');
    const data = await response.json();
    console.log('--- Item Data ---');
    console.log('Item Name:', data.name);
    console.log('Category:', data.category.name); // Adjust path if needed
  } catch (error) {
    console.error('Error fetching item data:', error);
  }
}
getItemData();

// Fetch Pokémon data by ID (Pokémon ID: 1 - Bulbasaur)
async function getPokemonDataById() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    const data = await response.json();
    console.log('--- Pokémon Data (ID: 1) ---');
    console.log('Name:', data.name);
    console.log('Abilities:', data.abilities.map(ability => ability.ability.name).join(', '));
  } catch (error) {
    console.error('Error fetching Pokémon data by ID:', error);
  }
}
getPokemonDataById();
