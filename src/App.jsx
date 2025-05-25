import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Detail from "./pages/Detail";
import MOCK_DATA from "./data/mock.js";
import styled from "styled-components";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 40px;

  @media (max-width: 768px) {
    padding: 16px 20px;
  }

  @media (max-width: 480px) {
    padding: 12px 12px;
  }
`;

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(() => {
    const saved = localStorage.getItem("selectedPokemon");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("selectedPokemon", JSON.stringify(selectedPokemon));
  }, [selectedPokemon]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      toast.error("❌ 더 이상 선택할 수 없습니다.");
      return;
    }
    if (selectedPokemon.find(p => p.id === pokemon.id)) {
      toast.info("이미 선택된 포켓몬입니다.");
      return;
    }
    setSelectedPokemon([...selectedPokemon, pokemon]);
    toast.success(`${pokemon.korean_name} 추가 완료!`);
  };

  const removePokemon = (id) => {
    const removed = selectedPokemon.find(p => p.id === id);
    setSelectedPokemon(selectedPokemon.filter(p => p.id !== id));
    if (removed) toast.info(`${removed.korean_name} 삭제됨`);
  };

  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dex"
            element={
              <Dex
                selectedPokemon={selectedPokemon}
                onAdd={addPokemon}
                onRemove={removePokemon}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Detail
                selectedPokemon={selectedPokemon}
                onAdd={addPokemon}
                onRemove={removePokemon}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={2000} />
    </AppContainer>
  );
}

export default App;
