import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 160px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0,0,0,0.1);
  padding: 16px;
  text-align: center;
  background: white;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Name = styled.h3`
  margin: 10px 0 4px;
`;

const Number = styled.p`
  font-size: 14px;
  color: gray;
`;

const AddButton = styled.button`
  margin-top: 10px;
  padding: 6px 12px;
  background: #ff4d4d;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #cc0000;
  }
`;

const PokemonCard = ({ pokemon, onAdd }) => {
  return (
    <Card>
      <Image src={pokemon.img_url} alt={pokemon.korean_name} />
      <Name>{pokemon.korean_name}</Name>
      <Number>No. {pokemon.id.toString().padStart(3, '0')}</Number>
      <AddButton onClick={() => onAdd(pokemon)}>추가</AddButton>
    </Card>
  );
};

export default PokemonCard;
