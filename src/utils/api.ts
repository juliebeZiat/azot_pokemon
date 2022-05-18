import { Pokemons, Pokemon } from '../utils/interface';
import { useQuery, UseQueryResult } from 'react-query';

// Fetch all pokemons
export function fetchPokemons(): UseQueryResult<Pokemons, Error> {
  return useQuery('pokemons', async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100');
    return await response.json();
  });
}

// Fetch information of a specific pokemon with a variable query
export function fetchPokemon(name: string | undefined): UseQueryResult<Pokemon, Error> {
  if (typeof name === 'string') {
    return useQuery(['pokemon', name], async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return await response.json();
    });
  }
  throw new Error('invalid name');
}