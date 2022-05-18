// List of pokemons
export interface Pokemons {
  results: [
    {
      name: string,
    }
  ]
}

// Data of a specific pokemon
export interface Pokemon {
  id: number;
  name: string,
  sprites: {
    front_default: string,
    back_default: string,
  }
}