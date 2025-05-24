import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 40px;
  justify-content: center;
`;

const PokemonList = ({ pokemonData, onAdd }) => {
  return (
    <ListWrapper>
      {pokemonData.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onAdd={onAdd} />
      ))}
    </ListWrapper>
  );
};

export default PokemonList;
