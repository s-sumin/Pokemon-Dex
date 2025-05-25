import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPokemon } from "../redux/pokemonSlice";

const Card = styled.div`
  width: 100%;
  max-width: 160px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0,0,0,0.1);
  padding: 16px;
  text-align: center;
  background: white;
  cursor: pointer;

  @media (max-width: 480px) {
    max-width: 100%;
  }
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
  margin: 0;
`;

const Type = styled.p`
  font-size: 13px;
  color: #555;
  margin: 4px 0;
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
  font-size: 14px;

  &:hover {
    background: #cc0000;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 5px 10px;
  }
`;

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    navigate(`/detail/${pokemon.id}`);
  };

  return (
    <Card onClick={handleCardClick}>
      <Image src={pokemon.img_url} alt={pokemon.korean_name} />
      <Name>{pokemon.korean_name}</Name>
      <Number>No. {pokemon.id.toString().padStart(3, "0")}</Number>
      <Type>타입: {(pokemon.types ?? []).join(", ")}</Type>
      <AddButton
        onClick={(e) => {
          e.stopPropagation();
          dispatch(addPokemon(pokemon));
        }}
      >
        추가
      </AddButton>
    </Card>
  );
};

export default PokemonCard;
