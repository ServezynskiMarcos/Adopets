import { createSlice } from "@reduxjs/toolkit";

export const petsSlice = createSlice({
  name: "pets",
  initialState: {
    allPets: [],
  },
  reducers: {
    getAllPets: (state, action) => {
      state.allPets = action.payload;
    },
  },
});
export const { getAllPets } = petsSlice.actions;
export default petsSlice.reducer;
