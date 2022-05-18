import PokemonList from '../PokemonList/PokemonList';
import './App.css';
import { fetchPokemons, fetchPokemon } from '../utils/api';
import { Route, Routes } from 'react-router-dom';
import PokemonCard from '../PokemonCard/PokemonCard';
import { useState } from 'react';
import Spinner from '../Spinner/Spinner';

function App() {
  const [pokemonDetails, setPokemonDetails] = useState<string>('');

  const pokemonsQuery = fetchPokemons();
  const pokemonQuery = fetchPokemon(pokemonDetails);

  if (pokemonsQuery.isLoading || pokemonsQuery.isIdle || pokemonQuery.isLoading || pokemonQuery.isIdle) {
    return <Spinner />;
  }

  if (pokemonsQuery.error || pokemonQuery.error) {
    if (pokemonsQuery.error) {
      return <p>{pokemonsQuery.error.message}</p>
    }
    if (pokemonQuery.error) {
      return <p>{pokemonQuery.error.message}</p>
    }
  }

  const pokemons = pokemonsQuery.data;
  const pokemon = pokemonQuery.data;

  return (
    <div className="App font-sans m-10">
      <Routes>
        <Route path="/" element={<PokemonList pokemons={pokemons} setPokemonDetails={setPokemonDetails} />} />
        <Route path="/:pokeName" element={<PokemonCard pokemon={pokemon} />} />
      </Routes>
    </div>
  );
}

export default App;
