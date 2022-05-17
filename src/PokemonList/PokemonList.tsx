import { Link } from 'react-router-dom';
import { Pokemons } from '../utils/interface';

interface Props {
  pokemons: Pokemons;
  setPokemonDetails: React.Dispatch<React.SetStateAction<string>>;
}

const PokemonList = ({ pokemons, setPokemonDetails }: Props) => {
  return (
    <div>
      <ul>
        {pokemons.results.map((poke) => (
          <li key={poke.name}>
            <Link
              to={`/${poke.name}`}
              onClick={() => setPokemonDetails(poke.name)}
            >
              {poke.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
