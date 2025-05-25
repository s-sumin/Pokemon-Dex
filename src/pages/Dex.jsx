import React from "react";
import MOCK_DATA from "../data/mock.js";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  return (
    <div>
      <Dashboard />
      <PokemonList pokemonData={MOCK_DATA} />
    </div>
  );
};

export default Dex;
