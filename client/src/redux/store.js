import { configureStore } from "@reduxjs/toolkit";
import pets from "./Slices/petsSlice";
// import users from "./Slices/usersSlice";

export default configureStore({
  reducer: {
    pets: pets,
    // users: users,
  },
});