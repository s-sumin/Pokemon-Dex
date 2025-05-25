// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Detail from "./pages/Detail";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
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
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={2000} />
    </AppContainer>
  );
}

export default App;
