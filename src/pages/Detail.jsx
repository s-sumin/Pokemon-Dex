import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MOCK_DATA from "../data/mock";
import { usePokemon } from "../App";
import styled from "styled-components";

const DetailContainer = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const NotFoundMessage = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 1.2em;
  color: #cc0000;
`;

const PokemonImage = styled.img`
  width: 100%; 
  max-width: 300px;
  height: auto;
  margin-bottom: 20px;
`;

const PokemonName = styled.h2`
  color: red;
  margin-bottom: 10px;
`;

const PokemonType = styled.p`
  font-size: 1.1em;
  color: #555;
  margin-bottom: 8px;
`;

const PokemonDescription = styled.p`
  font-size: 1em;
  color: #333;
  line-height: 1.5;
  padding: 0 20px;
`;

const ActionButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => (props.isSelected ? "red" : "#4CAF50")};
  color: white;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const BackButton = styled.button`
  margin-top: 12px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: #f2f2f2;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedPokemon, addPokemon, removePokemon } = usePokemon();

  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id));
  const isSelected = selectedPokemon.some((p) => p.id === pokemon?.id);

  if (!pokemon) {
    return <NotFoundMessage>포켓몬 데이터를 찾을 수 없습니다.</NotFoundMessage>;
  }

  return (
    <DetailContainer>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <PokemonType>타입: {(pokemon.types ?? []).join(", ")}</PokemonType>
      <PokemonDescription>{pokemon.description}</PokemonDescription>

      <ActionButton
        isSelected={isSelected}
        onClick={() =>
          isSelected ? removePokemon(pokemon.id) : addPokemon(pokemon)
        }
      >
        {isSelected ? "삭제" : "추가"}
      </ActionButton>

      <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
    </DetailContainer>
  );
};

export default Detail;