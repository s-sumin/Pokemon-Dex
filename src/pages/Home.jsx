import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/Logo.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
`;

const Img = styled.img`
  width: 1200px;
  height: auto;
  margin-bottom: 40px;
`;

const StartButton = styled.button`
    padding: 20px 40px;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 10px;
    background-color: rgb(255, 0, 0);
    color: white;
    border: none;
    transition: background-color 0.3s;

  &:hover {
    background-color: #d13d32;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/dex");
  };

  return (
    <Container>
      <Img src={Logo} alt="로고" />
      <StartButton onClick={handleStart}>
        포켓몬 도감 시작하기
      </StartButton>
    </Container>
  );
};

export default Home;
