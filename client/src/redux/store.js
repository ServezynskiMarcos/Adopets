import { configureStore } from "@reduxjs/toolkit";
import pets from "./Slices/petsSlice";
import users from "./Slices/userSlice";

export default configureStore({
  reducer: {
    pets: pets,
    users: users,
  },
});