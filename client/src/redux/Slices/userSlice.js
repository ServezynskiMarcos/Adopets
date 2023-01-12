import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    userLog: [],
  },
  reducers: {
    userLogIn: (state, action) => {
      state.userLog = action.payload;
    },
  },
});
export const { userLogIn } = userSlice.actions;
export default userSlice.reducer;
