import React from "react";
import MOCK_DATA from "../data/mock.js";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { usePokemon } from "../App"; 

const Dex = () => {
  const { selectedPokemon, addPokemon, removePokemon } = usePokemon();

  return (
    <div>
      <Dashboard selectedPokemon={selectedPokemon} onRemove={removePokemon} />
      <PokemonList pokemonData={MOCK_DATA} onAdd={addPokemon} />
    </div>
  );
};

export default Dex;
