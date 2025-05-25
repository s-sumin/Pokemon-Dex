import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemon } from "../redux/pokemonSlice";
import MOCK_DATA from "../data/mock";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) => state.pokemon.selected);

  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id));
  const isSelected = selectedPokemon.some((p) => p.id === pokemon?.id);

  if (!pokemon) return <div>포켓몬 데이터를 찾을 수 없습니다.</div>;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h2 style={{ color: "red" }}>{pokemon.korean_name}</h2>
      <p>타입: {(pokemon.types ?? []).join(", ")}</p>
      <p>{pokemon.description}</p>

      <button
        onClick={() =>
          isSelected
            ? dispatch(removePokemon(pokemon.id))
            : dispatch(addPokemon(pokemon))
        }
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: isSelected ? "red" : "#4CAF50",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {isSelected ? "삭제" : "추가"}
      </button>

      <br />
      <button
        onClick={() => navigate(-1)}
        style={{
          marginTop: "12px",
          padding: "8px 16px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#f2f2f2",
          cursor: "pointer",
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
};

export default Detail;
