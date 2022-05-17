export interface Pokemons {
  results: [
    {
      name: string,
    }
  ]
}

export interface Pokemon {
  id: number;
  name: string,
  sprites: {
    front_default: string,
    back_default: string,
  }
}