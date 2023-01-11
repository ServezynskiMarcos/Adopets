import { createSlice } from "@reduxjs/toolkit";

export const petsSlice = createSlice({
  name: "pets",
  initialState: {
    allPets: [],
    filterPets: [],
  },
  reducers: {
    getAllPets: (state, action) => {
      state.allPets = action.payload;
    },
    getFilterPets: (state, action) => {
      const filter = state.allPets.filter(
        (pets) => pets.species === action.payload
      );
      state.filterPets = filter;
    },
    getFilterUbication: (state, action) => {
      const filter = state.allPets.filter(
        (pets) =>
          pets.ubication.includes(action.payload) ||
          pets.species.includes(action.payload) ||
          pets.description.includes(action.payload)
      );
      state.filterPets = filter;
    },
    getFilterId: (state, action) => {
      state.filterPets = action.payload;
    }
  },
});
export const { getAllPets, getFilterPets, getFilterUbication, getFilterId } =
  petsSlice.actions;
export default petsSlice.reducer;
