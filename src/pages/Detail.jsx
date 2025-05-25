import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components"; 
import MOCK_DATA from "../data/mock";

const DetailContainer = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const PokemonImage = styled.img`
  width: 200px; 
  height: auto;
`;

const PokemonName = styled.h2`
  color: red;
`;

const PokemonInfo = styled.p`
  margin-bottom: 8px;
`;

const ActionButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => (props.$isSelected ? "red" : "#4CAF50")};
  color: white;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`;

const BackButton = styled.button`
  margin-top: 12px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: #f2f2f2;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Detail = ({ selectedPokemon, onAdd, onRemove }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id));
  const isSelected = selectedPokemon.some((p) => p.id === pokemon?.id);

  if (!pokemon) {
    return <div>포켓몬 데이터를 찾을 수 없습니다.</div>;
  }

  return (
    <DetailContainer>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <PokemonInfo>타입: {(pokemon.types ?? []).join(", ")}</PokemonInfo>
      <PokemonInfo>{pokemon.description}</PokemonInfo>

      <ActionButton
        $isSelected={isSelected} 
        onClick={() => (isSelected ? onRemove(pokemon.id) : onAdd(pokemon))}
      >
        {isSelected ? "삭제" : "추가"}
      </ActionButton>

      <br />

      <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
    </DetailContainer>
  );
};

export default Detail;