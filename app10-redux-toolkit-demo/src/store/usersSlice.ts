import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [
      { fname: "Ram", lname: "kumar", email: "ram@gmail.com" },
      { fname: "Ram1", lname: "kumar", email: "ram1@gmail.com" },
      { fname: "Ram", lname: "kumar", email: "ram2@gmail.com" },
    ],
  },
  reducers: {
    createUserAction: (state, action) => {
      state.users.push(action.payload);
    },
    updateUserAction: (state,action) => {
        state.users[action.payload.index] = action.payload.value
    },
    deleteUserAction: (state, action) => {
      state.users = state.users.filter((us) => {
        return us.email !== action.payload.email;
      });
    },
  },
});

export default usersSlice.reducer;
export const { createUserAction, updateUserAction, deleteUserAction } =
  usersSlice.actions;
