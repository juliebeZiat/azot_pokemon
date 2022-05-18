// == Import utils
import { fetchPokemons, fetchPokemon } from '../utils/api';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// == Import components
import PokemonCard from '../PokemonCard/PokemonCard';
import PokemonList from '../PokemonList/PokemonList';
import Spinner from '../Spinner/Spinner';

function App() {
  // Fetch data of all pokemons : endpoint '/pokemon/'
  const pokemonsQuery = fetchPokemons();

  // Creation of a state to dynamise the query variable
  const [pokemonDetails, setPokemonDetails] = useState<string>('');
  // Fetch data of a specific pokemon : endpoint '/pokemon/{name}'
  const pokemonQuery = fetchPokemon(pokemonDetails);

  // Display a spinner when data is fetching
  if (pokemonsQuery.isLoading || pokemonsQuery.isIdle || pokemonQuery.isLoading || pokemonQuery.isIdle) {
    return <Spinner />;
  }

  // Handle error 
  if (pokemonsQuery.error || pokemonQuery.error) {
    if (pokemonsQuery.error) {
      return <p>{pokemonsQuery.error.message}</p>
    }
    if (pokemonQuery.error) {
      return <p>{pokemonQuery.error.message}</p>
    }
  }

  // Data storage using the API data sent in props to the components 
  const pokemons = pokemonsQuery.data;
  const pokemon = pokemonQuery.data;

  return (
    <div className="font-sans m-10 text-center">
      <Routes>
        <Route path="/" element={<PokemonList pokemons={pokemons} setPokemonDetails={setPokemonDetails} />} />
        <Route path="/:pokeName" element={<PokemonCard pokemon={pokemon} />} />
      </Routes>
    </div>
  );
}

export default App;
