import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const exists = state.selected.find(p => p.id === action.payload.id);
      if (exists) {
        alert("이미 선택된 포켓몬입니다!");
        return;
      }
      if (state.selected.length >= 6) {
        alert("최대 6마리까지만 선택할 수 있습니다.");
        return;
      }
      state.selected.push(action.payload);
    },
    removePokemon: (state, action) => {
      state.selected = state.selected.filter(p => p.id !== action.payload);
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
