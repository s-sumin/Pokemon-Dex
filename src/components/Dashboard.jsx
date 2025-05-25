import React from "react";
import styled from "styled-components";
import pokeball from "../assets/pokeball.png";
import { usePokemon } from "../App"; 

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const DashboardTitle = styled.h2`
  margin-bottom: 20px;
  color: red;
`;

const SlotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const DashboardSlotCard = styled.div`
  width: 100%;
  max-width: 160px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
  background: white;
`;

const DashboardImage = styled.img`
  width: 100px;
  height: 100px;
`;

const DashboardName = styled.h3`
  margin: 10px 0 4px;
`;

const DashboardNumber = styled.p`
  font-size: 14px;
  color: gray;
`;

const Type = styled.p`
  font-size: 13px;
  color: #555;
  margin: 4px 0;
`;

const RemoveButton = styled.button`
  margin-top: 10px;
  padding: 6px 12px;
  background: red;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #cc0000;
  }
`;

const PokeballSlot = styled.div`
  width: 100%;
  max-width: 160px;
  height: 208px;
  border: 2px dashed #ccc;
  border-radius: 12px;
  background: url(${pokeball}) center center no-repeat;
  background-size: 60px 60px;
`;

const Dashboard = () => {
  const { selectedPokemon, removePokemon } = usePokemon();

  const slots = Array(6)
    .fill(null)
    .map((_, i) => selectedPokemon[i] || null);

  return (
    <DashboardWrapper>
      <DashboardTitle>나만의 포켓몬</DashboardTitle>
      <SlotGrid>
        {slots.map((pokemon, i) =>
          pokemon ? (
            <DashboardSlotCard key={`poke-${pokemon.id}-${i}`}>
              <DashboardImage src={pokemon.img_url} alt={pokemon.korean_name} />
              <DashboardName>{pokemon.korean_name}</DashboardName>
              <DashboardNumber>
                No. {pokemon.id.toString().padStart(3, "0")}
              </DashboardNumber>
              <Type>타입: {(pokemon.types ?? []).join(", ")}</Type>
              <RemoveButton onClick={() => removePokemon(pokemon.id)}>
                삭제
              </RemoveButton>
            </DashboardSlotCard>
          ) : (
            <PokeballSlot key={`empty-${i}`} />
          )
        )}
      </SlotGrid>
    </DashboardWrapper>
  );
};

export default Dashboard;
