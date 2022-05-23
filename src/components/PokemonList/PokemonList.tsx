import { Link } from 'react-router-dom';
import { fetchAllPokemons } from '../../utils/api';
import Spinner from '../Spinner/Spinner';

interface PokemonListProps {
  setPokemonDetails: React.Dispatch<React.SetStateAction<string>>;
}


const PokemonList = ({ setPokemonDetails }: PokemonListProps) => {
  const allPokemonsQuery = fetchAllPokemons();
  
  if (allPokemonsQuery.isLoading || allPokemonsQuery.isIdle) {
    <Spinner />;
  }
  if (allPokemonsQuery.error) {
    <p>{allPokemonsQuery.error.message}</p>
  }
  
  const pokemons = allPokemonsQuery.data;
  return (
    <div>
      <ul className="list-none grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {pokemons?.results.map((pokemon) => (
          <Link
            key={pokemon.name}
            to={`/${pokemon.name}`}
            onClick={() => setPokemonDetails(pokemon.name)}
          >
            <li key={pokemon.name} className="bg-red p-8 m-2 text-2xl cursor-pointer text-white">
              {(pokemon.name).toUpperCase()}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
