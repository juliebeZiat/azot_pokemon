import PokemonList from '../PokemonList/PokemonList';
import './App.css';
import { fetchPokemons } from '../utils/api';

function App() {
  const pokemonQuery = fetchPokemons();

  if (pokemonQuery.isLoading || pokemonQuery.isIdle) {
    return <h1>Chargement...</h1>;
  }

  if (pokemonQuery.error) {
    return <p>{pokemonQuery.error.message}</p>
  }

  // Récuperation du tableau results pour le passer en props
  const pokemons = pokemonQuery.data.results;
  
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <PokemonList results={pokemons}/>
    </div>
  );
}

export default App;
