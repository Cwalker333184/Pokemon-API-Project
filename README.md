# Pokemon-API-Project

This project utilizes the Pokémon API (PokeAPI) to fetch various Pokémon-related data, such as Pokémon attributes (e.g., name, experience, types), abilities, berries, and more. The data is retrieved through the **node-fetch** library, with results logged to the terminal. This project is built using Node.js and demonstrates how to interact with external APIs in a server-side JavaScript environment.

## Project Overview

The project is divided into **three groups** of functionalities that fetch and display data from different endpoints of the PokeAPI:

1. **Group 1**: Fetches basic Pokémon data for specific Pokémon (e.g., Squirtle, Pikachu).
2. **Group 2**: Retrieves miscellaneous Pokémon-related data such as Berry flavors, Abilities, and the second Pokémon in the list.
3. **Group 3**: Fetches data about abilities, items, and specific Pokémon by ID.

## Project Structure

The project consists of the following JavaScript files:

- **group1.js**: Fetches basic data for specific Pokémon (e.g., Squirtle and Pikachu).
- **group2.js**: Fetches miscellaneous Pokémon-related data, such as Berry flavors, Abilities, and the second Pokémon in the list.
- **group3.js**: Fetches Ability data, Item data, and Pokémon data by ID.

### Key Features
- Utilizes **node-fetch** to make asynchronous HTTP requests to the Pokémon API.
- Processes and displays JSON data from the API in a readable format in the terminal.
- Divides the project into manageable groups, each focusing on a different aspect of the API data.