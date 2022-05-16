import { Results } from '../utils/interface';
import { useQuery, UseQueryResult } from 'react-query';

export function fetchPokemons(): UseQueryResult<Results, Error> {
  return useQuery('pokemon', async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    return await response.json();
  });
}