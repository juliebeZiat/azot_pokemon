import PokemonCard from "../PokemonCard/PokemonCard";
import PropTypes from 'prop-types';
import { Results } from '../utils/interface';

const PokemonList = ({ results }: Results) => (
  <div>
    <ul>
      {results.map((poke) => (
        <li key={poke.name}>{poke.name}</li>
      ))}
      </ul>
    <PokemonCard />
  </div>
);


PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

export default PokemonList;
