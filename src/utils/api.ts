import { Pokemons, Pokemon } from '../utils/interface';
import { useQuery, UseQueryResult } from 'react-query';

export function fetchPokemons(): UseQueryResult<Pokemons, Error> {
  return useQuery('pokemons', async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    return await response.json();
  });
}

export function fetchPokemon(name: string | undefined): UseQueryResult<Pokemon, Error> {
  if (typeof name === 'string') {
    return useQuery(['pokemon', name], async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return await response.json();
    });
  }
  throw new Error('invalid name');
}