import React, { useState } from "react";
import MOCK_DATA from "../data/mock.js";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);



  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("더 이상 선택할 수 없습니다.");
      return;
    }

    if (selectedPokemon.find(p => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다"); 
    }

    setSelectedPokemon([...selectedPokemon, pokemon]);
  };


  const removePokemon = (id) => {
    setSelectedPokemon(selectedPokemon.filter(p => p.id !== id));
  };

  return (
    <div>
      <Dashboard selectedPokemon={selectedPokemon} onRemove={removePokemon} />
      <PokemonList pokemonData={MOCK_DATA} onAdd={addPokemon} />
    </div>
  );
};

export default Dex;
