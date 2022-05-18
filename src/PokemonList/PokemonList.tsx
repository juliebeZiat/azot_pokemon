import { Link } from 'react-router-dom';
import { Pokemons } from '../utils/interface';

interface Props {
  pokemons: Pokemons;
  setPokemonDetails: React.Dispatch<React.SetStateAction<string>>;
}

// => Display list of all pokemons
const PokemonList = ({ pokemons, setPokemonDetails }: Props) => {
  return (
    <div>
      <ul className="list-none grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {pokemons.results.map((poke) => (
          <Link
            key={poke.name}
            to={`/${poke.name}`}
            onClick={() => setPokemonDetails(poke.name)}
          >
            <li key={poke.name} className="bg-red p-8 m-2 text-2xl cursor-pointer text-white">
              {(poke.name).toUpperCase()}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
