import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    userLog: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : [],
  },
  reducers: {
    userLogIn: (state, action) => {
      state.userLog = {
        email: action.payload.email,
        name: action.payload.name,
        phone: action.payload.phone,
      };
      localStorage.setItem("user", JSON.stringify(state.userLog));
    },
  },
});
export const { userLogIn } = userSlice.actions;
export default userSlice.reducer;
