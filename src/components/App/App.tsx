import { fetchPokemon } from '../../utils/api';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import PokemonCard from '../PokemonCard/PokemonCard';
import PokemonList from '../PokemonList/PokemonList';
import Spinner from '../Spinner/Spinner';

function App() {
  // Creation of a state to dynamise the query variable
  const [pokemonDetails, setPokemonDetails] = useState<string>('');
  const pokemonQuery = fetchPokemon(pokemonDetails);

  if (pokemonQuery.isLoading || pokemonQuery.isIdle) {
    return <Spinner />;
  }

  if (pokemonQuery.error) {
    return <p>{pokemonQuery.error.message}</p>
  }

  const pokemon = pokemonQuery.data;

  return (
    <div className="font-sans m-10 text-center">
      <Routes>
        <Route path="/" element={<PokemonList setPokemonDetails={setPokemonDetails} />} />
        <Route path="/:pokeName" element={<PokemonCard pokemon={pokemon} />} />
      </Routes>
    </div>
  );
}

export default App;
