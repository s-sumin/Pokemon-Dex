import React from "react";
import MOCK_DATA from "../data/mock.js";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = ({ selectedPokemon, onAdd, onRemove }) => {
  return (
    <div>
      <Dashboard selectedPokemon={selectedPokemon} onRemove={onRemove} />
      <PokemonList pokemonData={MOCK_DATA} onAdd={onAdd} />
    </div>
  );
};

export default Dex;
